package com.covoit.service.impl;

import com.covoit.model.Trajet;
import com.covoit.service.TrajetService;

public class TrajetServiceImpl implements TrajetService {
	@Autowired
	
	@Override
	public Trajet findById(Long id) {
		return trajetRepository
	}

	@Override
	public Trajet save(Trajet trajet) {
		return null;
	}

}
