package com.instagram.kys.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.instagram.kys.script.auth.AuthResponseScript;
import com.instagram.kys.service.AuthService;
import com.instagram.kys.web.dto.auth.SignupRequestDto;

@Controller
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	@ResponseBody
	@RequestMapping(value="/auth/signup", method=RequestMethod.POST, produces = "text/html;charset=utf-8")
	public String signupSubmit(SignupRequestDto signupRequestDto) {
		boolean result = authService.signup(signupRequestDto);
		AuthResponseScript authResponseScript = new AuthResponseScript();
		return authResponseScript.signupScript(result);
	}
	
	@ResponseBody
	@RequestMapping(value="/auth/username/check", method=RequestMethod.GET)
	public String checkUsername(String username) {
		boolean result = authService.checkUsername(username);
		return Boolean.toString(result); // Ajax에서는 String값으로 받아들여 판단하기 때문
	}

}
