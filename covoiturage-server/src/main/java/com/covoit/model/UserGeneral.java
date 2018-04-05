package com.covoit.model;

public class UserGeneral {
	  private Long id;

	  private String username;

	  private String email;
	  
	  private boolean isSmoke;

	  private boolean isTalk;

	  private boolean isMusic;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean getIsSmoke() {
		return isSmoke;
	}

	public void setIsSmoke(boolean isSmoke) {
		this.isSmoke = isSmoke;
	}

	public boolean getIsTalk() {
		return isTalk;
	}

	public void setIsTalk(boolean isTalk) {
		this.isTalk = isTalk;
	}

	public boolean getIsMusic() {
		return isMusic;
	}

	public void setIsMusic(boolean isMusic) {
		this.isMusic = isMusic;
	}
}
