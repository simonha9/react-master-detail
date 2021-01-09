package com.simon.md.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simon.md.domain.User;
import com.simon.md.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	
	public User findUserById(String id) {
		return userRepo.findById(id).get();
	}

	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	public String saveUser(User user) {
		return userRepo.save(user).getId();
	}

	public String updateUser(User user) {
		return saveUser(user);
	}

	public void deleteUserById(String id) {
		userRepo.deleteById(id);
	}

}
