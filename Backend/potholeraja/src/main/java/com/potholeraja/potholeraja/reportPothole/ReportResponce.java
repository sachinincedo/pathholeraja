package com.potholeraja.potholeraja.reportPothole;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.potholeraja.potholeraja.entities.TicketEntity;

import lombok.Data;

@Data
@JsonInclude(Include.NON_NULL)
public class ReportResponce {

	 private Long ticketId;
	   private String status;
		private TicketEntity ticketEntity;

}
