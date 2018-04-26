package com.covoit.service;

import java.util.List;

import com.covoit.model.Contact;
import com.covoit.model.Trajet;

public interface ContactService {
	Contact findById(Long id);
	List<Contact> findAll();
	Contact save(Contact contact);
	List<Contact> findBySenderId(Long userId);
	List<Contact> findByTrajetId(long trajetId);
}
