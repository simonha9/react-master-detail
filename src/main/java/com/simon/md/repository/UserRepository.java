package com.simon.md.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.simon.md.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
