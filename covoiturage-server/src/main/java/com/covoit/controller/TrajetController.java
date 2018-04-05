package com.covoit.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
		  List<Step> list = new ArrayList<Step>();
		  
		  int order = 1;
		  for(DirectionsStep step : steps) {
			  Step item = Step.ToEntity(step);
			  item.setOrder(order);
			  item.setTrajet(trajet);
			  trajet.getSteps().add(item);
			  list.add(item);
			  ++order;
		  }
		  
		  trajetService.save(trajet);
		  
		  return new ResponseEntity<Trajet>(trajet, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/trajet")
	public ResponseEntity<List<Trajet>> trajets() {
		System.out.println("hola");
		List<Trajet> trajets = trajetService.findAll();
		System.out.println(trajets.size());
		return new ResponseEntity<List<Trajet>>(trajets, HttpStatus.OK);
	}
}
