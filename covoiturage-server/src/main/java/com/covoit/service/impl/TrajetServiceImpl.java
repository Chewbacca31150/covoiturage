package com.covoit.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.covoit.dto.Search;
import com.covoit.help.Distance;
import com.covoit.model.Location;
import com.covoit.model.Step;
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
	
	public List<Trajet> searchsTrajets(Search search)
	{
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<Trajet> trajets = this.findAll();
		
		List<Trajet> results = new ArrayList<Trajet>();
		primary: for (Trajet trajet : trajets) {
			//sort by order
			
			ArrayList<Step> steps = new ArrayList<Step>(trajet.getSteps());
			Collections.sort(steps, new Comparator<Step>() {
			    @Override
			    public int compare(Step o1, Step o2) {
			        return Integer.compare(o1.getOrder(), o2.getOrder());
			    }
			});
			
			//found start position
			int index = 0;
			boolean found = false;
			double distance = 1000.0;
			for(int i = index; i < steps.size(); i++) {
				if(!found && Distance.distance(steps.get(i).getStartPoint(), search.getStart()) < distance) {//in meters
					found = true;
				}
				else if(found && Distance.distance(steps.get(i).getEndPoint(), search.getEnd()) < distance) {//user.getDistanceMax() in meters
					results.add(trajet);
					continue primary;
				}
			}
		}
		return results;
	}


}
