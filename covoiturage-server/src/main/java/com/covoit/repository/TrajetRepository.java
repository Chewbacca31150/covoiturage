package com.covoit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covoit.model.Trajet;
import com.covoit.model.User;

public interface TrajetRepository extends JpaRepository<Trajet, Long> {
	Trajet findById(Long id);

	List<Trajet> findAll();

	List<Trajet> findByStartLocationAddressContaining(String address);

	List<Trajet> findByStopLocationAddressContaining(String address);

	List<Trajet> findByPassengers(User passenger);

	List<Trajet> findByDriverId(long driverId);
}
