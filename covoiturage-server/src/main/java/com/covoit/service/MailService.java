package com.covoit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

@Service
public class MailService {
 
	@Autowired
    private JavaMailSender mailSender;
 
    public void prepareAndSend(String recipient, String message) {
        SimpleMailMessage mail = new SimpleMailMessage(); 
        mail.setTo(recipient); 
        mail.setSubject("New message received"); 
        mail.setText(message);
        mailSender.send(mail);
    }
 
}