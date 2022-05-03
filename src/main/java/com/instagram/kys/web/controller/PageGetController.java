package com.instagram.kys.web.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageGetController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String getIndex(Locale locale, Model model) {
		return "index";
	}
	
	@RequestMapping(value = "/auth/signin", method = RequestMethod.GET)
	public String getSignIn(Locale locale, Model model) {
		return "auth/signin";
	}
	
	@RequestMapping(value = "/auth/signup", method = RequestMethod.GET)
	public String getSignUp(Locale locale, Model model) {
		return "auth/signup";
	}

}
