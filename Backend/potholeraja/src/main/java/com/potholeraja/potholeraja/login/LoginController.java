package com.potholeraja.potholeraja.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.potholeraja.potholeraja.util.PotholerajaConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/v1/")
public class LoginController {
	@Autowired
	LoginService loginService;

	@PostMapping(value = PotholerajaConstants.LOGIN)
	public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequestData loginRequestData) {
		System.out.println("login hit");
		System.out.println(loginRequestData);
		LoginResponse loginResponse = loginService.login(loginRequestData);
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(loginResponse);
	}

}
