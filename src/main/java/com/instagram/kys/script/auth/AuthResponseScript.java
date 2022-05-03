package com.instagram.kys.script.auth;

public class AuthResponseScript {
	
	public String signupScript(boolean result) {
		StringBuilder builder = new StringBuilder();
		
		if(result) {
			builder.append("<script>");
			builder.append("alert(\"회원가입 완료. 로그인 페이지로 이동합니다.\");");
			builder.append("location.replace(\"/kys/auth/signin\");");
			builder.append("</script>");
		} else {
			builder.append("<script>");
			builder.append("alert(\"가입에 실패하였습니다.\");");
			builder.append("history.back();");
			builder.append("</script>");
		}
		return builder.toString();
	}

}
