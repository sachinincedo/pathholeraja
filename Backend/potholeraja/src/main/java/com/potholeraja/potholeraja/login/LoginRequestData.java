package com.potholeraja.potholeraja.login;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequestData {

	private String email;
	private String password;
	
}

