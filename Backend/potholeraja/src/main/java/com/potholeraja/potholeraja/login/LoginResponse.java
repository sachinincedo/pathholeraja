package com.potholeraja.potholeraja.login;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@JsonInclude(Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
	private String token;
	private String message;
	private Long userId;
	private HttpStatus status;

	public LoginResponse(String token, String message, Long userId) {
		this.token = token;
		this.message = message;
		this.userId=userId;
	}
	 public LoginResponse(HttpStatus status, String message) {
	        this.message = message;
	    }

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
}
