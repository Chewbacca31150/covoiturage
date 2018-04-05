package com.covoit.model;

import javax.persistence.Column;

public class UserRequest {

  private Long id;

  private String username;

  private String password;

  private String email;
  
  private boolean isSmokeDriver;

  private boolean isTalkDriver;

  private boolean isMusicDriver;
  
  private boolean isSmokePassenger;

  private boolean isTalkPassenger;

  private boolean isMusicPassenger;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

public boolean isSmokeDriver() {
	return isSmokeDriver;
}

public void setSmokeDriver(boolean isSmokeDriver) {
	this.isSmokeDriver = isSmokeDriver;
}

public boolean isTalkDriver() {
	return isTalkDriver;
}

public void setTalkDriver(boolean isTalkDriver) {
	this.isTalkDriver = isTalkDriver;
}

public boolean isMusicDriver() {
	return isMusicDriver;
}

public void setMusicDriver(boolean isMusicDriver) {
	this.isMusicDriver = isMusicDriver;
}

public boolean isSmokePassenger() {
	return isSmokePassenger;
}

public void setSmokePassenger(boolean isSmokePassenger) {
	this.isSmokePassenger = isSmokePassenger;
}

public boolean isTalkPassenger() {
	return isTalkPassenger;
}

public void setTalkPassenger(boolean isTalkPassenger) {
	this.isTalkPassenger = isTalkPassenger;
}

public boolean isMusicPassenger() {
	return isMusicPassenger;
}

public void setMusicPassenger(boolean isMusicPassenger) {
	this.isMusicPassenger = isMusicPassenger;
}
}
