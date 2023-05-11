package com.potholeraja.potholeraja.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "tbl_location")
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tbl_locationId_pk")
	private Long locationId;

	@Column(name = "cross_road_1")
	private String crossRoad1;

	@Column(name = "cross_road_2")
	private String crossRoad2;

	@Column(name = "additional_desc")
	private String additionalDescription;

	@Column(name = "latitude")
	private Double latitude;

	@Column(name = "longitude")
	private Double longitude;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "state")
	private String state;
	
	
	@Column(name = "zipcode")
	private String zipcode;
	
	@OneToMany(mappedBy = "location")
	private Set<TicketEntity> tickets = new HashSet<>();

}
