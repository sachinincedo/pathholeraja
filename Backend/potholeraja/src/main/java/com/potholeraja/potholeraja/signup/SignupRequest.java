package com.potholeraja.potholeraja.signup;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

	private String firstName;
	private String lastName;
	private String email;
	private String password;
	
}
