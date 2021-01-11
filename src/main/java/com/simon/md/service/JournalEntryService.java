package com.simon.md.service;

import java.util.List;

import com.simon.md.domain.JournalEntry;

public interface JournalEntryService {
	
	String SERVICE_NAME = "journalEntry";
	
	public JournalEntry findJournalEntryById(String id);
	public List<JournalEntry> getAllEntriesByUsername(String userName);
	public String saveJournalEntry(JournalEntry je);
	public String updateJournalEntry(JournalEntry je);
	public void deleteEntryById(String id);
	
}
