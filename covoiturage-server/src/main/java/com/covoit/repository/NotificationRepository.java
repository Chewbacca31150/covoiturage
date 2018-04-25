package com.covoit.repository;

import com.covoit.model.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
	List<Notification> findByUserId(long id);
}
