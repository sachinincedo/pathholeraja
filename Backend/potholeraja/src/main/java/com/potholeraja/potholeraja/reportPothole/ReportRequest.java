package com.potholeraja.potholeraja.reportPothole;

import com.potholeraja.potholeraja.entities.Location;
import com.potholeraja.potholeraja.util.SeverityEnum;

import lombok.Data;

@Data
public class ReportRequest {

	private String photoName;
	private String photoData;
	private String length;
	private String breadth;
	private String depth;
	private SeverityEnum severity;
	private String ticketDescription;
	private Boolean premise;
	private Boolean volunteer;
	private Location location;
	private Long id;
}
