package com.potholeraja.potholeraja.entities;

import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.potholeraja.potholeraja.util.SeverityEnum;
import com.potholeraja.potholeraja.util.StatusEnum;

import lombok.Data;

@Entity
@Data
@Table(name = "tbl_ticket")
public class TicketEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tbl_ticketId_pk")
	private Long ticketId;

	@Column(name = "ticket_desc")
	private String ticketDescription;

	@Enumerated(EnumType.STRING)
	@Column(name = "status", length = 20)
	private StatusEnum status;

	@Column(name = "photo_name")
	private String photo_name;

	@Column(name = "photo_url")
	private String photoData;

	@Column(name = "length")
	private String length;

	@Column(name = "breadth")
	private String breadth;

	@Column(name = "depth")
	private String depth;

	@Enumerated(EnumType.STRING)
	@Column(name = "severity", length = 20)
	private SeverityEnum severity;

	@Column(name = "premise")
	private Boolean premise;

	@Column(name = "is_volunteer")
	private Boolean volunteer;

	@Column(name = "is_active")
	private boolean isActive;

	@Column(name = "is_deleted")
	private boolean isDeleted;

	@Column(name = "creation_date_time", columnDefinition = "TIMESTAMP", nullable = false)
	@CreatedDate
	private ZonedDateTime creationDateTime;

	@Column(name = "last_modified_date_time", columnDefinition = "TIMESTAMP", nullable = false)
	@LastModifiedDate
	private ZonedDateTime updationDateTime;

	@ManyToOne
	 @JsonIgnore 
	@JoinColumn(name = "location_id_fk")
	private Location location;
	
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "tbl_userId_pk")
	private UserEntity user;

}
