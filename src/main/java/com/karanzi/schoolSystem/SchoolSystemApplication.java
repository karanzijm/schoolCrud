package com.karanzi.schoolSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class SchoolSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(SchoolSystemApplication.class, args);
	}

}
