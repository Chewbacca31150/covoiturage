package com.covoit.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.covoit.model.Contact;
import com.covoit.model.Notification;
import com.covoit.model.Trajet;
import com.covoit.model.User;
import com.covoit.repository.ContactRepository;
import com.covoit.repository.NotificationRepository;
import com.covoit.repository.UserRepository;
import com.covoit.service.NotificationService;

@Service
public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private NotificationRepository repo;

	@Autowired
	private ContactRepository contacts;
	
	@Autowired
	private UserRepository users;
	
	@Override
	public void createNotification(Contact contact) {
		try
		{
			List<Contact> contacts = this.contacts.findByTrajetId(contact.getTrajet().getId());
			ArrayList<Long> users = new ArrayList<Long>();
			for(Contact c : contacts)
			{
				if(!users.contains(c.getSenderId()))
					users.add(c.getSenderId());
			}
			
			for(Long u : users)
			{
				Notification notification = new Notification();
				notification.setMessage("Nouveau message : " + contact.getMessage().substring(20) + "...");
				notification.setTrajet(contact.getTrajet());
				notification.setUser(this.users.getOne(u));
				repo.save(notification);
			}
		}
		catch(Exception e)
		{}
	}

	@Override
	public List<Notification> GetMyNotifications() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return repo.findByUserId(user.getId());
	}

	@Override
	public void delete(Notification notification) {
		// TODO Auto-generated method stub
		
	}

}
