package com.covoit.model;

import java.util.Date;
import java.util.List;

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
import javax.persistence.Table;

@Entity
@Table(name = "TRAJET")
public class Trajet {
	  @Id
	  @Column(name = "id")
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  
	  @Column(name = "driver_id")
	  private Long driver_id; 

	  /*@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
	  @JoinTable(name = "user_authority",
	      joinColumns = @JoinColumn(name = "passengers_id", referencedColumnName = "id"),
	      inverseJoinColumns = @JoinColumn(name = "passenger_id", referencedColumnName = "id"))*/
	  @Column(name = "passengers_id")
	  private String passengers_id;//List<String> passengers_id;

	  //@Column(name = "passengers_id")
	  //private List<Long> passenger_id;
	  
	  @Column(name = "is_smoke")
	  private boolean isSmoke;

	  @Column(name = "is_talk")
	  private boolean isTalk;
	  
	  @Column(name = "is_music")
	  private boolean isMusic;
	  
	  @Column(name = "is_completed")
	  private boolean isCompleted;
	  
	  @Column(name = "point_departure")
	  private long pointDeparture;
	  
	  @Column(name = "pointArrival")
	  private long pointArrival;
	  
	  @Column(name = "date_departure")
	  private Date date_departure;

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

	/*public List<Long> getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(List<Long> passenger_id) {
		this.passenger_id = passenger_id;
	}*/
	/*public List<String> getPassengers_id() {
		return passengers_id;
	}

	public void setPassengers_id(List<String> passengers_id) {
		this.passengers_id = passengers_id;
	}*/
	
	public String getPassengers_id() {
		return passengers_id;
	}
	
	public void setPassengers_id(String passengers_id) {
		this.passengers_id = passengers_id;
	}

	public boolean isSmoke() {
		return isSmoke;
	}

	public void setSmoke(boolean isSmoke) {
		this.isSmoke = isSmoke;
	}

	public boolean isTalk() {
		return isTalk;
	}

	public void setTalk(boolean isTalk) {
		this.isTalk = isTalk;
	}

	public boolean isMusic() {
		return isMusic;
	}

	public void setMusic(boolean isMusic) {
		this.isMusic = isMusic;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public long getPointDeparture() {
		return pointDeparture;
	}

	public void setPointDeparture(long pointDeparture) {
		this.pointDeparture = pointDeparture;
	}

	public long getPointArrival() {
		return pointArrival;
	}

	public void setPointArrival(long pointArrival) {
		this.pointArrival = pointArrival;
	}

	public Date getDate_departure() {
		return date_departure;
	}

	public void setDate_departure(Date date_departure) {
		this.date_departure = date_departure;
	}

	  
	  

	  
}
