package com.covoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covoit.model.Trajet;
import com.covoit.model.UserAuthority;

public interface UserAuthorityRepository extends JpaRepository<UserAuthority, Long> {
	    UserAuthority findById( Long id );
	    void deleteByUserId(Long userId);
	}
