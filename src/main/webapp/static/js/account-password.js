
const profileUsername = document.querySelector(".profile-username");
const passwordInputs = document.querySelectorAll(".password-input");
const submitBtn = document.querySelector(".submit-btn");
const profileImgRound = document.querySelector('.profile-img-round');

let usercode = 0;

let principal = getPrincipal();

load();

function load() {
	profileUsername.textContent = principal.username;
	const profileImg = profileImgRound.querySelector('img');
	profileImg.src = getProfileImg(); // principal.js에 있는메소드. 프로필이미지 주소 가져오기
}

function isEmpty(str) {
	return str == "" || typeof str == "undefined" || str == null;
}

submitBtn.onclick = () => {

	let curentPasswordRepeat = passwordInputs[0].value; // 현재 비밀번호(입력)
	let newPassword = passwordInputs[1].value; // 새 비밀번호
	let newPasswordRepeat = passwordInputs[2].value; // 새 비밀번호 화인

	if (isEmpty(curentPasswordRepeat) || isEmpty(newPassword) || isEmpty(newPasswordRepeat)) {
		alert("비어있는 란을 채우십시오.")
	} else { 
		passwordObject = createPasswordObject();
		$.ajax({
			type: "put",
			url: "/kys/profile/account/password/update",
			data: JSON.stringify(passwordObject), // AccountPasswordReqDto 객체로 전달
			contentType: "application/json; charset=utf-8",
			dataType: "text",
			success: function(data) {
				if (data == "sameAsOld") {
					alert("바꾸려는 비밀번호가 이전 비밀번호와 같습니다.")
				} else if (data == "wrongNewPassword") {
					alert("새 비밀번호 확인 값이 잘못되었습니다.")
				} else if (data == "wrongOldPassword") {
					alert("이전 비밀번호 확인 값이 잘못되었습니다.")
				} else {
					alert("비밀번호를 변경하였습니다.");
					location.replace("/kys/logout");
				}
			},
			error: function() {
				alert("비동기 처리 오류");
			}

		});
	}
}

function createPasswordObject() {
	let passwordObject = {
		"usercode": principal.usercode, 
		"username": principal.username, // 현재 패스워드값
		"oldRePassword": passwordInputs[0].value, // 현재 패스워드 확인값
		"newPassword": passwordInputs[1].value, // 새 패스워드값
		"newRePassword": passwordInputs[2].value, // 새 패스워드 확인값
	}
	return passwordObject;
}




