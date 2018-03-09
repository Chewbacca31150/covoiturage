package com.covoit.service;

import java.util.List;

import com.covoit.model.Authority;

public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByname(String name);
}
