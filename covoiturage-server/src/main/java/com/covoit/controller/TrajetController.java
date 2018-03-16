package com.covoit.controller;

import com.google.maps.GeoApiContext;

public class TrajetController {
	private GeoApiContext context;
	public TrajetController () {
		context = new GeoApiContext.Builder()
			    .apiKey("AIzaSyDi9cqC_wA23bDv4G8l5EgRAHSmPg7UfV4")
			    .build();
	}
}
