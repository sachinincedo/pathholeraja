package com.potholeraja.potholeraja.login;

import org.springframework.http.ResponseEntity;

public interface LoginService {

	LoginResponse login(LoginRequestData loginRequestData);

}
