package com.covoit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covoit.model.Contact;
import com.covoit.model.Trajet;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    Contact findById( Long id );
    List<Contact> findAll();
    List<Contact> findBySenderId(Long userId);
    List<Contact> findByTrajetId(Long trajetId);
}

