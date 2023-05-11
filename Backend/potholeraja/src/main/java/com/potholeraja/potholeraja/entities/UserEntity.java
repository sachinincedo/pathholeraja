package com.potholeraja.potholeraja.entities;

import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.Data;

@Entity
@Data
@Table(name = "tbl_user")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tbl_userId_pk")
	private Long userId;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "phone")
	private String phone;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "creation_date_time", columnDefinition = "TIMESTAMP", nullable = false)
	@CreatedDate
	private ZonedDateTime creationDateTime;

	@Column(name = "last_modified_date_time", columnDefinition = "TIMESTAMP", nullable = false)
	@LastModifiedDate
	private ZonedDateTime updationDateTime;

	@Column(name = "is_active")
	private boolean isActive;

	@Column(name = "created_by")
	private Long createdBy;

	@Column(name = "updated_by")
	private Long updatedBy;

	@Column(name = "is_deleted")
	private boolean isDeleted;

}
