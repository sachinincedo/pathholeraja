package com.potholeraja.potholeraja.signup;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class SignupPushAndResponce {

	private String firstName;
	private String lastName;
	private String email;
	//private String password;
	
}
