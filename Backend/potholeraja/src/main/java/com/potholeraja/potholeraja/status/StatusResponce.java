package com.potholeraja.potholeraja.status;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.potholeraja.potholeraja.entities.TicketEntity;

import lombok.Data;

@Data
public class StatusResponce {

	List<TicketEntity> ticket;
    private HttpStatus httpStatus;
    //private String pin;
	
	public StatusResponce(List<TicketEntity> ticket) {
		super();
		this.ticket = ticket;
	}

	public StatusResponce() {
		super();
	}

	public List<TicketEntity> getTicket() {
		return ticket;
	}

	public void setTicket(List<TicketEntity> ticket) {
		this.ticket = ticket;
	}

	@Override
	public String toString() {
		return "StatusResponce [ticket=" + ticket + "]";
	}
	
}
