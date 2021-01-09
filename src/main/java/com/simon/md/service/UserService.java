package com.simon.md.service;

import java.util.List;

import com.simon.md.domain.User;

public interface UserService {
	
	String SERVICE_NAME = "users";
	
	public User findUserById(String id);
	public List<User> getAllUsers();
	public String saveUser(User user);
	public String updateUser(User user);
	public void deleteUserById(String id);
	
}
