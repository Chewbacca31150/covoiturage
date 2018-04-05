package com.covoit.model;

import java.io.Serializable;
import java.util.Collection;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Created by chewie
 */

@Entity
@Table(name = "USER")
public class User implements UserDetails, Serializable {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "username")
  private String username;

  @JsonIgnore
  @Column(name = "password")
  private String password;

  @Column(name = "email")
  private String email;
  
  @Column(name = "is_smoke_driver", nullable = true)
  private boolean isSmokeDriver;

  @Column(name = "is_talk_driver", nullable = true)
  private boolean isTalkDriver;

  @Column(name = "is_music_driver", nullable = true)
  private boolean isMusicDriver;
  
  @Column(name = "is_smoke_passenger", nullable = true)
  private boolean isSmokePassenger;
  
  @Column(name = "is_talk_passenger", nullable = true)
  private boolean isTalkPassenger;
  
  @Column(name = "is_music_passenger")
  private boolean isMusicPassenger;
  
  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  private Set<Trajet> trajets = new HashSet<Trajet>();
  
  @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
  @JoinTable(name = "user_authority",
      joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
      inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
  private List<Authority> authorities;
  
  
  

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

  public void setAuthorities(List<Authority> authorities) {
    this.authorities = authorities;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities;
  }

  // We can add the below fields in the users table.
  // For now, they are hardcoded.
  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isEnabled() {
    return true;
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

public Set<Trajet> getTrajets() {
	return trajets;
}

public void setTrajets(Set<Trajet> trajets) {
	this.trajets = trajets;
}


}
