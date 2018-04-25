package com.covoit.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.covoit.model.Trajet;
import com.covoit.model.User;

public class ContactDTO {
	private Trajet trajet;
	private User receiver;
	private User sender;
	private String message;
	private Date dateSent;
	
	public ContactDTO(Trajet trajet, User sender, String message, Date dateSent ) {
		this.trajet = trajet;
		this.sender = sender;
		this.message = message;
		this.dateSent = dateSent;
	}
	public Trajet getTrajet() {
		return trajet;
	}
	public void setTrajet(Trajet trajet) {
		this.trajet = trajet;
	}
	public User getSender() {
		return sender;
	}
	public void setSender(User sender) {
		this.sender = sender;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getDateSent() {
		return dateSent;
	}
	public void setDateSent(Date dateSent) {
		this.dateSent = dateSent;
	}
}
