package com.potholeraja.potholeraja.home;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.potholeraja.potholeraja.entities.TicketEntity;
import com.potholeraja.potholeraja.repositories.TicketRepository;

@Service
public class HomePageServiceImpl implements HomePageService {

	@Autowired
	TicketRepository ticketRepository;

	@Override
	public ResponseEntity<HomeResponce> getHomePageDetails(Long userId) {
		List<TicketEntity> ticket = ticketRepository.findAll();
		Long totalPothole = (long) ticket.size();
//		Long potholeIreported = ticket.stream()
//				.filter(user -> user.getUser().getUserId().equals(userId)).count();

		Long potholeIreported = ticket.stream()
			    .filter(user -> user.getUser().getUserId().equals(userId))
			    .count();
          System.out.println("this is output" + potholeIreported);
			if (potholeIreported == null) {
			    potholeIreported = 0L;
			    }
		
		HomeResponce homeResponce = new HomeResponce();
		homeResponce.setPotholeIreport(potholeIreported);
		homeResponce.setTotalPotholeReported(totalPothole);

		if (potholeIreported == 0) {
			homeResponce.setPotholeIreport(0L);
		}

		return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(homeResponce);
	}
}
