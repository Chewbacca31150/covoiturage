package com.covoit.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.dto.NotifDto;
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
	public ResponseEntity<List<NotifDto>> searchsTrajets() {
		List<Notification> notifications = service.GetMyNotifications();
		ArrayList<NotifDto> dtos = new ArrayList<NotifDto>();
		
		for(Notification notif : notifications)
		{
			NotifDto dto = new NotifDto();
			dto.setId(notif.getId());
			dto.setMessage(notif.getMessage());
			dto.setTrajetId(notif.getTrajet().getId());
			dto.setUserId(notif.getUser().getId());
			
			dtos.add(dto);
		}
		return new ResponseEntity<List<NotifDto>>(dtos, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/notification")
	public ResponseEntity<?> deleteNotif(@RequestParam(value = "id") Long id) {
		try
		{
			service.delete(id);
			return new ResponseEntity<Object>(null, HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return new ResponseEntity<Object>(null, HttpStatus.BAD_REQUEST);
		}
	}
}
