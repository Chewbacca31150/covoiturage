package com.covoit.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.covoit.model.Authority;
import com.covoit.model.User;
import com.covoit.model.UserGeneral;
import com.covoit.model.UserRequest;
import com.covoit.repository.UserRepository;
import com.covoit.service.AuthorityService;
import com.covoit.service.UserService;

/**
 * Created by chewie
 */

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AuthorityService authService;
  

  public void resetCredentials() {
    List<User> users = userRepository.findAll();
    for (User user : users) {
      user.setPassword(passwordEncoder.encode("123"));
      userRepository.save(user);
    }
  }

  public void deleteByUsername(String username) {
	  userRepository.deleteByUsername(username);
  }
  
  @Override
  // @PreAuthorize("hasRole('USER')")
  public User findByUsername(String username) throws UsernameNotFoundException {
    User u = userRepository.findByUsername(username);
    return u;
  }
  
  public User findById(Long id) throws AccessDeniedException {
    User u = userRepository.findOne(id);
    return u;
  }

  @PreAuthorize("hasRole('ADMIN')")
  public List<User> findAll() throws AccessDeniedException {
    List<User> result = userRepository.findAll();
    return result;
  }
  
  public int findAllNumber() {
	  return  userRepository.findAll().size();
  }

  @Override
  public User save(UserRequest userRequest) {
    User user = new User();
    user.setUsername(userRequest.getUsername());
    user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
    user.setEmail(userRequest.getEmail());
    user.setMusicDriver(false);
    user.setMusicPassenger(false);
    user.setTalkDriver(false);
    user.setTalkPassenger(false);
    user.setSmokeDriver(false);
    user.setSmokePassenger(false);
    List<Authority> auth = authService.findByname("ROLE_USER");
    user.setAuthorities(auth);
    this.userRepository.save(user);
    return user;
  }
  
  @Override
  public User save(UserGeneral userGeneral) {
	  User user = userRepository.findOne(userGeneral.getId());
	  user.setMusicDriver(userGeneral.isMusicDriver());
	  user.setTalkDriver(userGeneral.isTalkDriver());
	  user.setSmokeDriver(userGeneral.isSmokeDriver());
	  user.setSmokePassenger(userGeneral.isSmokePassenger());
	  user.setTalkPassenger(userGeneral.isTalkPassenger());
	  user.setMusicPassenger(userGeneral.isMusicPassenger());
	  return this.userRepository.save(user);
  }
  
  @Override
  public boolean checkPassword(String username, String password) {
	  User user = findByUsername(username);
	  return (user != null && passwordEncoder.matches(password, user.getPassword())) ? true : false;
  }
  
  @Override
  @Transactional
  public void removeUser(String username) {
	
	User user = findByUsername(username);
	userRepository.deleteByUsername(username);
  }

}
