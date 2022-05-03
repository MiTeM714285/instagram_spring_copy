package com.instagram.kys.service;

import com.instagram.kys.web.dto.auth.SignupRequestDto;

public interface AuthService {
	
	public boolean signup(SignupRequestDto signupRequestDto);
	public boolean checkUsername(String username);

}
