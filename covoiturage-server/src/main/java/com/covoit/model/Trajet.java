package com.covoit.model;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.google.maps.model.DirectionsResult;

@Entity
@Table(name = "TRAJET")
public class Trajet {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "driver_id")
	private Long driverId;

	@Column(name = "passengers_id")
	private String passengersId;

	@OneToMany(mappedBy = "trajets", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<User> passengers;

	@Column(name = "is_completed")
	private boolean isCompleted;

	@Column(name = "date_departure")
	private Date dateDeparture;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Location startLocation;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Location stopLocation;
		
	@Column(name = "max_places")
	private int maxPlaces;
	
	@Column(name = "path_back")
	private boolean pathBack;
		
	@Column(name = "regulard_days")
	private String regularDays;
	
	@Column(name = "hour_departure")
	private String hourDeparture;

    @OneToMany(mappedBy = "trajet", cascade = CascadeType.ALL)
    private Set<Step> steps;
   
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/*
	 * public List<Long> getPassenger_id() { return passenger_id; }
	 * 
	 * public void setPassenger_id(List<Long> passenger_id) { this.passenger_id =
	 * passenger_id; }
	 */
	/*
	 * public List<String> getPassengers_id() { return passengers_id; }
	 * 
	 * public void setPassengers_id(List<String> passengers_id) { this.passengers_id
	 * = passengers_id; }
	 */

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public Date getDateDeparture() {
		return dateDeparture;
	}

	public void setDateDeparture(Date dateDeparture) {
		this.dateDeparture = dateDeparture;
	}

	public int getMaxPlaces() {
		return maxPlaces;
	}

	public void setMaxPlaces(int maxPlaces) {
		this.maxPlaces = maxPlaces;
	}

	public Set<Step> getSteps() {
		return steps;
	}
	public Long getDriverId() {
		return driverId;
	}

	public void setSteps(Set<Step> steps) {
		this.steps = steps;
	}
	public void setDriverId(Long driverId) {
		this.driverId = driverId;
	}

	public String getPassengersId() {
		return passengersId;
	}

	public void setPassengersId(String passengersId) {
		this.passengersId = passengersId;
	}

	public Location getStartLocation() {
		return startLocation;
	}

	public void setStartLocation(Location startLocation) {
		this.startLocation = startLocation;
	}

	public Location getStopLocation() {
		return stopLocation;
	}

	public void setStopLocation(Location stopLocation) {
		this.stopLocation = stopLocation;
	}

	public Set<User> getPassengers() {
		return passengers;
	}

	public void setPassengers(Set<User> passengers) {
		this.passengers = passengers;
	}

	public boolean isPathBack() {
		return pathBack;
	}

	public void setPathBack(boolean pathBack) {
		this.pathBack = pathBack;
	}

	public String getRegularDays() {
		return regularDays;
	}

	public void setRegularDays(String regularDays) {
		this.regularDays = regularDays;
	}

	public String getHourDeparture() {
		return hourDeparture;
	}

	public void setHourDeparture(String hourDeparture) {
		this.hourDeparture = hourDeparture;
	}

}
