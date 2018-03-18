package com.covoit.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.model.User;
import com.google.maps.DirectionsApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DirectionsResult;

@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class TrajetController {
	private GeoApiContext context;
	public TrajetController () {
		context = new GeoApiContext.Builder()
			    .apiKey("AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4")
			    .build();
	}
	

	  @RequestMapping(method = GET, value = "/trajet")
	  public DirectionsResult loadById() throws IOException, ApiException, InterruptedException{
		  DirectionsResult restult = DirectionsApi.getDirections(this.context, "43.624928, 1.432223", "43.623711, 1.449761").await();
		  
		  return restult;
	  }
}
