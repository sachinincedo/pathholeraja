package com.potholeraja.potholeraja.status;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.potholeraja.potholeraja.entities.TicketEntity;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/home")
public class StatusController {

	@Autowired
	private StatusService statusService;

	@GetMapping("/status")
	public ResponseEntity<List<TicketEntity>> getStatus(@RequestParam Long userId) {
		List<TicketEntity> status=statusService.getStatus(userId);
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(status);
	}
}
