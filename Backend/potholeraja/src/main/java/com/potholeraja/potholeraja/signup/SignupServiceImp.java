package com.potholeraja.potholeraja.signup;

import java.time.ZonedDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.potholeraja.potholeraja.entities.UserEntity;
import com.potholeraja.potholeraja.repositories.UserRepository;
import com.potholeraja.potholeraja.util.RequestException;

@Service
public class SignupServiceImp implements SignupService {
	@Autowired
	UserRepository userRepository;

	@Override
	public SignupPushAndResponce registerUser(SignupRequest signupRequest) {
		// TODO Auto-generated method stub
		Optional<UserEntity> foundUser = userRepository.findByEmail(signupRequest.getEmail());
		if (foundUser.isPresent()) {
			throw new RequestException("User already exists");
		}
		UserEntity newUser = createUser(signupRequest);
		userRepository.saveAndFlush(newUser);
		SignupPushAndResponce signupPushAndResponce = new SignupPushAndResponce();
		signupPushAndResponce.setFirstName(signupRequest.getFirstName());
		signupPushAndResponce.setLastName(signupRequest.getLastName());
		signupPushAndResponce.setEmail(signupRequest.getEmail());
		return signupPushAndResponce;
	}

	private UserEntity createUser(SignupRequest signupRequest) {
		// TODO Auto-generated method stub
		UserEntity userEntity = new UserEntity();
		userEntity.setFirstName(signupRequest.getFirstName());
		userEntity.setLastName(signupRequest.getLastName());
		userEntity.setEmail(signupRequest.getEmail());
		userEntity.setPassword(signupRequest.getPassword());
		userEntity.setActive(true);
		ZonedDateTime now = ZonedDateTime.now();
		userEntity.setCreationDateTime(now);
		userEntity.setUpdationDateTime(now);
		userEntity.setDeleted(false);
		return userEntity;
	}

}
