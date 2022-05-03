package com.instagram.kys.domain.user;

import org.springframework.stereotype.Repository;

public interface UserRepository {
	public int signup(User user);
	public int checkUsername(String username);
}
