package com.covoit.service;

import java.util.List;

import com.covoit.model.Trajet;
import com.covoit.model.User;

public interface TrajetService {
	Trajet findById(Long id);

	List<Trajet> findAll();

	Trajet save(Trajet trajet);

	List<Trajet> findByStartLocationAddressContaining(String address);

	List<Trajet> findByStopLocationAddressContaining(String address);

	List<Trajet> findByPassengers(User passenger);

	List<Trajet> findByDriverId(long driverId);

}
