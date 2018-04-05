package com.covoit.model;

import javax.persistence.Column;

public class UserRequest {

  private Long id;

  private String username;

  private String password;

  private String email;
  
  private boolean isSmoke;

  private boolean isTalk;

  private boolean isMusic;

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
}
