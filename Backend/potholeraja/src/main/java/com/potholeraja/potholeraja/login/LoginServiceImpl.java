package com.potholeraja.potholeraja.login;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
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

//		if (user == null) {
//			return new LoginResponse(null, "Invalid username or password.");
//		}
//		if (!user.getEmail().equals(loginRequestData.getEmail())) {
//			return new LoginResponse(null, "Invalid email or password.");
//		}
//		if (!user.getPassword().equals(loginRequestData.getPassword())) {
//			return new LoginResponse(null, "Invalid email or password.");
//		}
		if(user == null) {
			return new LoginResponse(null, "Invalid email or password.");
		}
		if(!user.getPassword().equals(loginRequestData.getPassword())) {
			return new LoginResponse(null, "Invalid  password.");
		}

		// Generate and return a token
		String token = UUID.randomUUID().toString();

		return new LoginResponse(token, "Login successful.");
	}

}
