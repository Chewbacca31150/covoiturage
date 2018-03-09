package com.covoit.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.covoit.model.Authority;
import com.covoit.model.UserAuthority;

public interface UserAuthorityService {
  UserAuthority findById(Long id);
  
  @Transactional
  void deleteByUserId(Long userId);

  
}
