package com.covoit.service;

import java.util.List;

import com.covoit.model.User;
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

  User save(UserRequest user);
}
