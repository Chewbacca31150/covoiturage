package com.covoit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.dto.Search;
import com.covoit.model.Notification;
import com.covoit.model.Trajet;
import com.covoit.service.NotificationService;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class NotificationController {

	@Autowired
	NotificationService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/notification")
	public ResponseEntity<List<Notification>> searchsTrajets() {
		return new ResponseEntity<List<Notification>>(service.GetMyNotifications(), HttpStatus.OK);
	}
}
