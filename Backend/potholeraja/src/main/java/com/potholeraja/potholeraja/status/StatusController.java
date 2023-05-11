package com.potholeraja.potholeraja.status;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.potholeraja.potholeraja.entities.TicketEntity;

@RestController
public class StatusController {

	@Autowired
	private StatusService statusService;

	@GetMapping("/status")
	public ResponseEntity<List<TicketEntity>> getStatus(@RequestBody StatusRequest userId) {
		System.out.println("Hello");
		//StatusResponce status = statusService.getStatus(userId);
		List<TicketEntity> status=statusService.getStatus(userId.getUserId());
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(status);
	}
}
