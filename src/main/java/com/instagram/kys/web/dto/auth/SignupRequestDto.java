package com.instagram.kys.web.dto.auth;

import com.instagram.kys.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignupRequestDto {
	
	private String phoneOrEmail;
	private String name;
	private String username;
	private String password;
	
	public User toEntity() {
		String phone = null;
		String email = null;
		if (phoneOrEmail.contains("@")) {
			email = phoneOrEmail;
		} else {
			phone = phoneOrEmail;
		}
		
		return User.builder()
				.phone(phone)
				.email(email)
				.name(name)
				.username(username)
				.password(password)
				.build();
	}

}
