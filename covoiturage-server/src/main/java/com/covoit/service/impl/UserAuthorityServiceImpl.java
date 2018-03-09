package com.covoit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covoit.model.UserAuthority;
import com.covoit.repository.UserAuthorityRepository;
import com.covoit.service.UserAuthorityService;

@Service
public class UserAuthorityServiceImpl implements UserAuthorityService {

	@Autowired UserAuthorityRepository userAuthorityRepository;
	
	@Override
	public UserAuthority findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteByUserId(Long userId) {
		userAuthorityRepository.deleteByUserId(userId);
		
	}

}
