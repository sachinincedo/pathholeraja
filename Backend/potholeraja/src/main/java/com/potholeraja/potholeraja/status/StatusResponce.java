package com.potholeraja.potholeraja.status;

import java.util.List;

import com.potholeraja.potholeraja.entities.TicketEntity;

public class StatusResponce {

	List<TicketEntity> ticket;

	
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
