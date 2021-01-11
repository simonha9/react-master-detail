package com.simon.md.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.simon.md.MongoConfig;
import com.simon.md.domain.JournalEntry;
import com.simon.md.repository.JournalEntryRepository;
import com.simon.md.service.JournalEntryService;

@Service
public class JournalEntryServiceImpl implements JournalEntryService {

	@Autowired
	JournalEntryRepository jeRepo;
	
	@Autowired
	MongoTemplate mgt;
	
	public JournalEntry findJournalEntryById(String id) {
		return jeRepo.findById(id).get();
	}

	public List<JournalEntry> getAllEntriesByUsername(String userName) {
		MongoCollection col = mgt.getDb().getCollection(MongoConfig.db2CollectionName);
		List<JournalEntry> entries = new ArrayList<>();
		BasicDBObject sortObj = new BasicDBObject();
		Bson sort = new BasicDBObject("title", 1);
		List<Document> docs = (List<Document>) col.find(Filters.regex("userName", userName)).sort(sort)
				.into(new ArrayList<Document>());
		
		if (!docs.isEmpty()) {
			for (Document doc : docs) {
				JournalEntry je = buildEntryFromDoc(doc);
				entries.add(je);
			}
		}
		return entries;
	}
	
	private JournalEntry buildEntryFromDoc(Document doc) {
		JournalEntry je = new JournalEntry();
		je.setContent(doc.getString("content"));
		ObjectId docId = doc.getObjectId("_id");
		je.setId(doc.getObjectId("_id").toString());
		je.setTitle(doc.getString("title"));
		je.setUserName(doc.getString("userName"));
		return je;
	}

	public String saveJournalEntry(JournalEntry je) {
		return jeRepo.save(je).getId();
	}

	public String updateJournalEntry(JournalEntry je) {
		return jeRepo.save(je).getId();
	}

	public void deleteEntryById(String id) {
		jeRepo.deleteById(id);
	}

	
}
