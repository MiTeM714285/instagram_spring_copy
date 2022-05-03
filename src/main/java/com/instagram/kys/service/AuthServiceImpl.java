package com.instagram.kys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instagram.kys.domain.user.UserRepository;
import com.instagram.kys.web.dto.auth.SignupRequestDto;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public boolean signup(SignupRequestDto signupRequestDto) {
		// TODO Auto-generated method stub
		int result = userRepository.signup(signupRequestDto.toEntity());
		return result != 0;
	}

	@Override
	public boolean checkUsername(String username) {
		return userRepository.checkUsername(username) != 0 ? true : false;
	}

}
