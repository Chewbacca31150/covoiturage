package com.covoit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covoit.model.Contact;
import com.covoit.model.Trajet;
import com.covoit.repository.ContactRepository;
import com.covoit.service.ContactService;
import com.covoit.service.NotificationService;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	ContactRepository contactRepository;

	@Autowired
	NotificationService notificationService;
	
	@Override
	public Contact findById(Long id) {
		return contactRepository.findById(id);
	}

	@Override
	public List<Contact> findAll() {
		return contactRepository.findAll();
	}

	@Override
	public Contact save(Contact contact) {
		contact =  contactRepository.save(contact);
		this.notificationService.createNotification(contact);
		return contact;
	}

	@Override
	public List<Contact> findBySenderId(Long userId) {
		return contactRepository.findBySenderId(userId);
	}
	
	@Override
	public List<Contact> findByReceiverId(Long userId) {
		return null;
		//return contactRepository.findByReceiverId(userId);
	}

	@Override
	public List<Contact> findByTrajetId(long trajetId) {
		return contactRepository.findByTrajetId(trajetId);
	}
	
}
