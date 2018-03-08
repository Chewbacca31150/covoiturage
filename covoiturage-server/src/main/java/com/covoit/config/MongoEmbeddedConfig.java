package com.covoit.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;

@Configuration
public class MongoEmbeddedConfig {
    @Value("${mongodb.url:0}")
    private static final String MONGO_DB_URL = "localhost";

    @Value("${mongodb.name:0}")
    private static final String MONGO_DB_NAME = "covoit";

    @Bean
    public Mongo mongo() throws Exception {
        return new MongoClient(MONGO_DB_URL);
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongo(), MONGO_DB_NAME);
    }
}
