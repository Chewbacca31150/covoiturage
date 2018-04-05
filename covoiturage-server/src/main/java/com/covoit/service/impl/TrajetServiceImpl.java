package com.covoit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covoit.model.Trajet;
import com.covoit.repository.TrajetRepository;
import com.covoit.service.TrajetService;

@Service
public class TrajetServiceImpl implements TrajetService {
	@Autowired 
	TrajetRepository trajetRepository;
	
	@Override
	public Trajet findById(Long id) {
		return trajetRepository.findById(id);//trajetRepository;
	}

	@Override
	public Trajet save(Trajet trajet) {
		return trajetRepository.save(trajet);
	}

}
