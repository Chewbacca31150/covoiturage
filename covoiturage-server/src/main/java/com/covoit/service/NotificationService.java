package com.covoit.service;

import java.util.List;

import com.covoit.model.Contact;
import com.covoit.model.Notification;
import com.covoit.model.Trajet;

public interface NotificationService {
	void createNotification(Contact contact);
	
	List<Notification> GetMyNotifications();
	
	void delete(Notification notification);
	
}
