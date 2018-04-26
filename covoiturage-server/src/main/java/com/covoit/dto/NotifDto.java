package com.covoit.dto;

public class NotifDto {
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getTrajetId() {
		return trajetId;
	}
	public void setTrajetId(Long trajetId) {
		this.trajetId = trajetId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	private Long id;
	private Long trajetId;
	private Long userId;
	private String message;
}
