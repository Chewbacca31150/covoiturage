package com.covoit.service;

import com.covoit.model.Trajet;

public interface TrajetService {
	Trajet findById(Long id);
	Trajet save(Trajet trajet);
	
}
