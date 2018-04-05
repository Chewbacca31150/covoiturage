package com.covoit.model;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
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
	private Long driver_id;

	/*
	 * @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch =
	 * FetchType.EAGER)
	 * 
	 * @JoinTable(name = "user_authority", joinColumns = @JoinColumn(name =
	 * "passengers_id", referencedColumnName = "id"), inverseJoinColumns
	 * = @JoinColumn(name = "passenger_id", referencedColumnName = "id"))
	 */
	@Column(name = "passengers_id")
	private String passengers_id;// List<String> passengers_id;

	// @Column(name = "passengers_id")
	// private List<Long> passenger_id;

	@Column(name = "is_completed")
	private boolean isCompleted;

	@Column(name = "point_departure")
	private String pointDeparture;

	@Column(name = "point_arrival")
	private String pointArrival;

	@Column(name = "date_departure")
	private Date dateDeparture;

	@Column(name = "max_places")
	private int maxPlaces;

    @OneToMany(mappedBy="trajet")
    private Set<Step> steps = new HashSet<Step>();
   
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(Long driver_id) {
		this.driver_id = driver_id;
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

	public String getPassengers_id() {
		return passengers_id;
	}

	public void setPassengers_id(String passengers_id) {
		this.passengers_id = passengers_id;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getPointDeparture() {
		return pointDeparture;
	}

	public void setPointDeparture(String pointDeparture) {
		this.pointDeparture = pointDeparture;
	}

	public String getPointArrival() {
		return pointArrival;
	}

	public void setPointArrival(String pointArrival) {
		this.pointArrival = pointArrival;
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

	public void setSteps(Set<Step> steps) {
		this.steps = steps;
	}
}
