package com.covoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covoit.model.User;

/**
 * Created by chewie
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
    void deleteByUsername(String username);
}

