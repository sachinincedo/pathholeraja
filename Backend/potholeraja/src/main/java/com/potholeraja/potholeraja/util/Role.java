package com.potholeraja.potholeraja.util;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import com.potholeraja.potholeraja.entities.RolesEnum;

@Entity
@Table(name = "tbl_role")
public class Role {
	@Id
	@Column(name = "tbl_roles_id_pk")
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(name ="name", length = 20)
	private RolesEnum name;

	public Role() {

	}

	public Role(RolesEnum name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public RolesEnum getName() {
		return name;
	}

	public void setName(RolesEnum name) {
		this.name = name;
	}
	
}
