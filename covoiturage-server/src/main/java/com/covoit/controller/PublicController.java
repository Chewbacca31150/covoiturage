package com.covoit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.covoit.model.User;
import com.covoit.service.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by chewie
 */

@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class PublicController {

	@Autowired
	private UserService userService;

    @RequestMapping(method = GET, value = "/all-users")
    public int loadAll() {
      return this.userService.findAllNumber();
    }

}
