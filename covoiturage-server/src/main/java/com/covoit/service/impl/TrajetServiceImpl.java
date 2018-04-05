package com.covoit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covoit.model.Trajet;
import com.covoit.model.User;
import com.covoit.repository.TrajetRepository;
import com.covoit.service.TrajetService;

@Service
public class TrajetServiceImpl implements TrajetService {
	@Autowired
	TrajetRepository trajetRepository;

	@Override
	public Trajet findById(Long id) {
		return trajetRepository.findById(id);// trajetRepository;
	}

	@Override
	public Trajet save(Trajet trajet) {
		return trajetRepository.save(trajet);
	}

	@Override
	public List<Trajet> findAll() {
		return trajetRepository.findAll();
	}

	@Override
	public List<Trajet> findByStartLocationAddressContaining(String address) {
		return trajetRepository.findByStartLocationAddressContaining(address);
	}
	
	@Override
	public List<Trajet> findByStopLocationAddressContaining(String address) {
		return trajetRepository.findByStopLocationAddressContaining(address);
	}

	@Override
	public List<Trajet> findByPassengers(User passenger) {
		return trajetRepository.findByPassengers(passenger);
	}

	@Override
	public List<Trajet> findByDriverId(long driverId) {
		return trajetRepository.findByDriverId(driverId);
	}
	
	


}
