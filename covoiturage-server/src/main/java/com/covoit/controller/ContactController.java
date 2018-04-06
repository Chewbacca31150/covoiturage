package com.covoit.controller;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.dto.ContactDTO;
import com.covoit.model.Authority;
import com.covoit.model.Contact;
import com.covoit.model.Step;
import com.covoit.model.Trajet;
import com.covoit.model.User;
import com.covoit.service.AuthorityService;
import com.covoit.service.ContactService;
import com.covoit.service.MailService;
import com.covoit.service.TrajetService;
import com.covoit.service.UserService;
import com.google.maps.DirectionsApi;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DirectionsResult;
import com.google.maps.model.DirectionsStep;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ContactController {
	@Autowired
	ContactService contactService;

	@Autowired
	UserService userService;
	
	@Autowired
	TrajetService trajetService;

	@Autowired
	MailService mailService;

	@RequestMapping(method = RequestMethod.POST, value = "/contact")
	public ResponseEntity<?> contactSend(@RequestBody Contact contact)
			throws ApiException, InterruptedException, IOException {
		User receiver = userService.findById(contact.getReceiverId());
		if(receiver == null)return new ResponseEntity<>("Error, receiver not found", HttpStatus.BAD_REQUEST);
		User sender = userService.findById(contact.getSenderId());
		if(sender == null)return new ResponseEntity<>("Error, sender not found", HttpStatus.BAD_REQUEST);
		Contact c = contactService.save(contact);
		// TODO contact.getUser().getEmail()
		//mailService.prepareAndSend("chewbacca31150@gmail.com", c.getMessage());
		return new ResponseEntity<Contact>(contact, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/contact")
	public ResponseEntity<List<ContactDTO>> contactGetByUser() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<Contact> contacts = contactService.findByReceiverId(user.getId());
		List<ContactDTO> contactDTOList = new ArrayList();
		contacts.forEach(contact -> {
			User receiver = userService.findById(contact.getReceiverId());
			User sender = userService.findById(contact.getSenderId());
			Trajet trajet = trajetService.findById(contact.getTrajet().getId());
			ContactDTO contactDto = new ContactDTO(trajet, receiver, sender, contact.getMessage(), contact.getDateSent());
			contactDTOList.add(contactDto);
		});
		return new ResponseEntity<List<ContactDTO>>(contactDTOList, HttpStatus.OK);

	}
}
