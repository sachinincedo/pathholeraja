package com.potholeraja.potholeraja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"com.potholeraja.potholeraja.entities"})
public class PotholerajaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PotholerajaApplication.class, args);
	}
}
