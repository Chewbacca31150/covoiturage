package com.covoit.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.maps.model.DirectionsStep;

@Entity
@Table(name = "STEP")
public class Step {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "current_order")
	private int order;
	
	@Column(name = "meters")
	private long meters;

	@Column(name = "seconds")
	private long seconds;

	@OneToOne(cascade = CascadeType.ALL)
	private Location startPoint;

	@OneToOne(cascade = CascadeType.ALL)
	private Location endPoint;

	@ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="trajet_id", nullable=false)
	@JsonIgnore
    private Trajet trajet;
	
	public static Step ToEntity(DirectionsStep source) {
		Step item = new Step();
		item.setStartPoint(Location.ToEntity(source.startLocation));
		item.setEndPoint(Location.ToEntity(source.endLocation));
		item.setMeters(source.distance.inMeters);
		item.setSeconds(source.duration.inSeconds);
		return item;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public long getMeters() {
		return meters;
	}

	public void setMeters(long meters) {
		this.meters = meters;
	}

	public long getSeconds() {
		return seconds;
	}

	public void setSeconds(long seconds) {
		this.seconds = seconds;
	}

	public Location getStartPoint() {
		return startPoint;
	}

	public void setStartPoint(Location startPoint) {
		this.startPoint = startPoint;
	}

	public Location getEndPoint() {
		return endPoint;
	}

	public void setEndPoint(Location endPoint) {
		this.endPoint = endPoint;
	}

	public Trajet getTrajet() {
		return trajet;
	}

	public void setTrajet(Trajet trajet) {
		this.trajet = trajet;
	}

}
