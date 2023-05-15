package com.potholeraja.potholeraja.reportPothole;

import java.time.ZonedDateTime;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.potholeraja.potholeraja.entities.Location;
import com.potholeraja.potholeraja.entities.TicketEntity;
import com.potholeraja.potholeraja.entities.UserEntity;
import com.potholeraja.potholeraja.repositories.LocationRepository;
import com.potholeraja.potholeraja.repositories.TicketRepository;
import com.potholeraja.potholeraja.repositories.UserRepository;
import com.potholeraja.potholeraja.util.StatusEnum;

@Service
public class ReportServiceImpl implements ReportService {

	@Autowired
	private TicketRepository ticketRepository;

	@Autowired
	private LocationRepository locationRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public ReportResponce createTicket(ReportRequest reportRequest) {
        
		   ReportResponce reportResponce = new ReportResponce();
		    try {
		        TicketEntity ticketEntity = setTicketDetails(reportRequest);
		        Location location = setLocationDetails(reportRequest);
		        locationRepository.saveAndFlush(location);
		        ticketEntity.setLocation(location);
		        ticketRepository.saveAndFlush(ticketEntity);
		        reportResponce.setStatus("WIP");
		        reportResponce.setTicketId(ticketEntity.getTicketId());
		        reportResponce.setHttpStatus(HttpStatus.OK);
		    } catch (IllegalArgumentException ex) {
		        reportResponce.setStatus("Error: Invalid image data");
		        reportResponce.setHttpStatus(HttpStatus.BAD_REQUEST);
		    }
		    return reportResponce; 
	}

	private TicketEntity setTicketDetails(ReportRequest reportRequest) {
		// TODO Auto-generated method stub
		TicketEntity ticket = new TicketEntity();
		ticket.setPhoto_name(reportRequest.getPhotoName());
		//String base64ImageData = reportRequest.getPhotoData();
		//byte[] imageData = Base64.getDecoder().decode(base64ImageData);
		//ticket.setPhotoData(base64ImageData);
		byte[] imageData = Base64.getDecoder().decode(reportRequest.getPhotoData());
	    ticket.setPhotoData(imageData);
	    System.out.println("this is  image data " + imageData);
		ticket.setLength(reportRequest.getLength());
		ticket.setBreadth(reportRequest.getBreadth());
		ticket.setDepth(reportRequest.getDepth());
		ticket.setSeverity(reportRequest.getSeverity());
		ticket.setStatus(StatusEnum.UNDERPROGRESS);
		ticket.setTicketDescription(reportRequest.getTicketDescription());
		ticket.setPremise(reportRequest.getPremise());
		ticket.setVolunteer(reportRequest.getVolunteer());
		ticket.setActive(true);
		ticket.setDeleted(false);
		ZonedDateTime now = ZonedDateTime.now();
		ticket.setCreationDateTime(now);
		ticket.setUpdationDateTime(now);
		UserEntity user = userRepository.findById(reportRequest.getId()).orElse(null);
		ticket.setUser(user);
		return ticket;
	}

	private Location setLocationDetails(ReportRequest reportRequest) {

		Location location = new Location();
		location.setAddress(reportRequest.getLocation().getAddress());
		location.setAdditionalDescription(reportRequest.getLocation().getAdditionalDescription());
		location.setCity(reportRequest.getLocation().getCity());
		location.setCrossRoad1(reportRequest.getLocation().getCrossRoad1());
		location.setLatitude(reportRequest.getLocation().getLatitude());
		location.setLongitude(reportRequest.getLocation().getLongitude());
		location.setState(reportRequest.getLocation().getState());
		location.setPincode(reportRequest.getLocation().getPincode());

		return location;
	}

}
