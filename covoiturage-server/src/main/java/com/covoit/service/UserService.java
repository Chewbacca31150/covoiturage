package com.covoit.service;

import java.util.List;

import com.covoit.model.User;
import com.covoit.model.UserGeneral;
import com.covoit.model.UserRequest;

/**
 * Created by chewie
 */
public interface UserService {
  void resetCredentials();

  User findById(Long id);

  User findByUsername(String username);

  List<User> findAll();
  
  int findAllNumber();
  
  boolean checkPassword(String username, String password);
  
  void removeUser(String username);

  User save(UserRequest user);
  
  User save(UserGeneral user);
}
