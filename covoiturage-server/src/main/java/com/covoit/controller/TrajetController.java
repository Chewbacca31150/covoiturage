package com.covoit.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.model.RegularDays;
import com.covoit.model.Step;
import com.covoit.model.Trajet;
import com.covoit.model.User;
import com.covoit.service.TrajetService;
import com.covoit.service.impl.TrajetServiceImpl;
import com.google.maps.DirectionsApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DirectionsResult;
import com.google.maps.model.DirectionsStep;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TrajetController {

	@Autowired
	TrajetServiceImpl trajetService;

	private GeoApiContext context;

	public TrajetController() {
		context = new GeoApiContext.Builder().apiKey("AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4").build();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/trajet")
	public ResponseEntity<Trajet> trajet(@RequestBody Trajet trajet) throws ApiException, InterruptedException, IOException {

		  DirectionsResult result = DirectionsApi.getDirections(this.context, "43.624928, 1.432223", "43.623711, 1.549761").await();
		  
		  
		  DirectionsStep[] steps = result.routes[0].legs[0].steps;
		  Set<Step> stepSet = new HashSet<Step>();
		  /*trajet.getRegularDays().forEach(regularDay ->  {
			  regularDay.setTrajet(trajet);
		  });*/
		  int order = 1;
		  for(DirectionsStep step : steps) {
			  Step item = Step.ToEntity(step);
			  item.setOrder(order);
			  item.setTrajet(trajet);
			  stepSet.add(item);
			  trajet.setSteps(stepSet);
			  ++order;
		  }
		  
		  trajetService.save(trajet);
		  
		  return new ResponseEntity<Trajet>(trajet, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/trajet")
	public ResponseEntity<List<Trajet>> trajets() {
		List<Trajet> trajets = trajetService.findAll();
		System.out.println(trajets.size());
		return new ResponseEntity<List<Trajet>>(trajets, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/trajet/find")
	public ResponseEntity<List<Trajet>> searchTrajets(@RequestParam(value="search") String search) {
		List<Trajet> trajetsStart = trajetService.findByStartLocationAddressContaining(search);
		List<Trajet> trajetsStop = trajetService.findByStopLocationAddressContaining(search);
		List<Trajet> trajets = trajetsStart;
		for(Trajet trajet: trajetsStop) {
			if(!trajets.contains(trajet))trajets.add(trajet);
		}
		return new ResponseEntity<List<Trajet>>(trajets, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/trajet/one")
	public ResponseEntity<Trajet> getOneTrajet(@RequestParam(value = "id") long id) {
		Trajet trajet = trajetService.findById(id);
		return new ResponseEntity<Trajet>(trajet, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/trajet/one")
	public ResponseEntity<?> addUserTrajet(@RequestBody Trajet trajet) {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if(trajet == null || trajet.getPassengers() == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		if(trajet.getPassengers().size() <= trajet.getMaxPlaces()) return new ResponseEntity<>("Voiture pleine", HttpStatus.BAD_REQUEST);
		if(trajet.getPassengers().contains(user)) return new ResponseEntity<>("User déjà ajouté", HttpStatus.BAD_REQUEST);
		trajet.getPassengers().add(user);
		return new ResponseEntity<Trajet>(trajet, HttpStatus.OK);
	}
		
	@RequestMapping(method = RequestMethod.GET, value = "trajet/my-trajets")
	public ResponseEntity<List<Trajet>> getMyTrajetsDriver() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<Trajet> trajets = trajetService.findByDriverId(user.getId());
		return new ResponseEntity<List<Trajet>>(trajets, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "trajet/my-trajets/passenger")
	public ResponseEntity<List<Trajet>> getMyTrajetsPassenger() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<Trajet> trajets = trajetService.findByPassengers(user);
		return new ResponseEntity<List<Trajet>>(trajets, HttpStatus.OK);
	}
	
	
}
