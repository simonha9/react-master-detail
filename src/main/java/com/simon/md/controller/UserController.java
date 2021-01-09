package com.simon.md.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simon.md.domain.User;
import com.simon.md.service.UserService;

@RestController
@RequestMapping("/" + UserService.SERVICE_NAME)
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/save")
	public String saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@GetMapping("/get/{id}")
	public User findUserById(@PathVariable("id") String id) {
		return userService.findUserById(id);
	}
	
	@PostMapping("/update")
	public String updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@PostMapping("/delete/{id}")
	public void deleteUserById(@PathVariable("id") String id) {
		userService.deleteUserById(id);
	}
	
	@GetMapping("/")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
}
