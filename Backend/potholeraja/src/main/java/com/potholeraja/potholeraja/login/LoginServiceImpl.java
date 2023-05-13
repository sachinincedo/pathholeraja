package com.potholeraja.potholeraja.login;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.potholeraja.potholeraja.entities.UserEntity;
import com.potholeraja.potholeraja.repositories.UserRepository;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	UserRepository userRepository;

	@Override
	public LoginResponse login(LoginRequestData loginRequestData) {
		UserEntity user = userRepository.findByEmail(loginRequestData.getEmail()).orElse(null);
		LoginResponse loginResponse = new LoginResponse();
		if (user == null) {
            loginResponse.setMessage("Invalid email or password");
            loginResponse.setStatus(HttpStatus.BAD_REQUEST);
            return loginResponse;
		}
		if (!user.getPassword().equals(loginRequestData.getPassword())) {
			  loginResponse.setMessage("Invalid email or password");
			  loginResponse.setStatus(HttpStatus.BAD_REQUEST);
	            return loginResponse;
		}

		// Generate and return a token
		String token = UUID.randomUUID().toString();
		// UserEntity user1 =
		// userRepository.findByEmail(loginRequestData.getEmail()).orElse(null);
		Long userId=user.getUserId();
		loginResponse.setMessage("Login successful");
		loginResponse.setStatus(HttpStatus.OK);
		loginResponse.setToken(token);
		loginResponse.setUserId(userId);
		return loginResponse;
		//return ResponseEntity.ok(new LoginResponse(token, "Login successful.",userId));
	}

}
