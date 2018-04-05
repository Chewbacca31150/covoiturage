package com.covoit.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.model.Trajet;
import com.covoit.model.User;
import com.covoit.service.TrajetService;
import com.covoit.service.impl.TrajetServiceImpl;
import com.google.maps.DirectionsApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DirectionsResult;

@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class TrajetController {
	
	@Autowired 
	TrajetServiceImpl trajetService;
	
	private GeoApiContext context;
	public TrajetController () {
		context = new GeoApiContext.Builder()
			    .apiKey("AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4")
			    .build();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/trajet")
	public ResponseEntity<Trajet> trajet(@RequestBody Trajet trajet) throws ApiException, InterruptedException, IOException {
		trajetService.save(trajet);
		  DirectionsResult result = DirectionsApi.getDirections(this.context, "43.624928, 1.432223", "43.623711, 1.449761").await();
		  
		  return new ResponseEntity<Trajet>(trajet, HttpStatus.OK);
	}
	

	  @RequestMapping(method = GET, value = "/trajet/test")
	  public DirectionsResult loadById() throws IOException, ApiException, InterruptedException{
		  DirectionsResult restult = DirectionsApi.getDirections(this.context, "43.624928, 1.432223", "43.623711, 1.449761").await();
		  
		  return restult;
	  }
}
