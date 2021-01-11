package com.simon.md.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simon.md.domain.JournalEntry;
import com.simon.md.domain.User;
import com.simon.md.service.JournalEntryService;

@RestController
@RequestMapping("/" + JournalEntryService.SERVICE_NAME)
public class JournalController {

	@Autowired
	JournalEntryService jeService;
	
	@PostMapping("/save")
	public String saveUser(@RequestBody JournalEntry je) {
		return jeService.saveJournalEntry(je);
	}
	
	@GetMapping("/get/{id}")
	public JournalEntry findUserById(@PathVariable("id") String id) {
		return jeService.findJournalEntryById(id);
	}
	
	@PostMapping("/update")
	public String updateUser(@RequestBody JournalEntry je) {
		return jeService.updateJournalEntry(je);
	}
	
	@PostMapping("/delete/{id}")
	public void deleteUserById(@PathVariable("id") String id) {
		jeService.deleteEntryById(id);
	}
	
	@GetMapping("/{userName}")
	public List<JournalEntry> getAllEntriesByUsername(@PathVariable("userName") String userName) {
		return jeService.getAllEntriesByUsername(userName);
	}
	
}
