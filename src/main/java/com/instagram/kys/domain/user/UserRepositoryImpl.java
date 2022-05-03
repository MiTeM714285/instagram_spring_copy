package com.instagram.kys.domain.user;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryImpl implements UserRepository {
	
	@Autowired
	private SqlSession session;
	
	private final String NAME_SPACE = "com.instagram.kys.domain.user.UserRepository.";

	@Override
	public int signup(User user) {
		// TODO Auto-generated method stub
		return session.insert(NAME_SPACE + "signup", user);
	}

	@Override
	public int checkUsername(String username) {
		// TODO Auto-generated method stub
		return session.selectOne(NAME_SPACE + "checkUsername", username);
	}

}
