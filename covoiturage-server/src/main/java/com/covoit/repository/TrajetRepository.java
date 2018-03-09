package com.covoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covoit.model.Trajet;

public interface TrajetRepository extends JpaRepository<Trajet, Long> {
	    Trajet findById( Long id );
	}
