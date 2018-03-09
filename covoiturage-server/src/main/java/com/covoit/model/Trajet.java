package com.covoit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	  
	  @Column(name = "passenger_id")
	  private Long passenger_id;
	  
	  public Long getDriver() {
		  return driver_id;
	  }
	  
	  public void setDriver(Long driverId) {
		  driver_id = driverId;
	  }
	  
	  public Long getPassenger() {
		  return passenger_id;
	  }
	  
	  public void setPassenger(Long passengerId) {
		  passenger_id = passengerId;
	  }
	  
}
