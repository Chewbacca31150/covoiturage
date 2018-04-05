package com.covoit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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

	@Column(name = "start")
	private String startPoint;

	@Column(name = "end")
	private String endPoint;

	@ManyToOne
    @JoinColumn(name="trajet_id", nullable=false)
    private Trajet trajet;
	
	public static Step ToEntity(DirectionsStep source) {
		Step item = new Step();
		item.setStartPoint(source.startLocation.toString());
		item.setEndPoint(source.endLocation.toString());
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

	public String getStartPoint() {
		return startPoint;
	}

	public void setStartPoint(String startPoint) {
		this.startPoint = startPoint;
	}

	public String getEndPoint() {
		return endPoint;
	}

	public void setEndPoint(String endPoint) {
		this.endPoint = endPoint;
	}

	public Trajet getTrajet() {
		return trajet;
	}

	public void setTrajet(Trajet trajet) {
		this.trajet = trajet;
	}

}
