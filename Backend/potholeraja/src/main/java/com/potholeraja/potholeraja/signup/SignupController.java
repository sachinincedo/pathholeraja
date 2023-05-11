package com.potholeraja.potholeraja.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class SignupController {

	@Autowired
	SignupService signupService;

	@PostMapping("/signup")
	public ResponseEntity<SignupPushAndResponce> registerUser(@RequestBody SignupRequest SignupRequest) {
		SignupPushAndResponce user = signupService.registerUser(SignupRequest);
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(user);

	}

}
