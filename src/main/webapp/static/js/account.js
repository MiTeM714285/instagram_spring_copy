const profileUsername = document.querySelector(".profile-username");
const textInputs = document.querySelectorAll(".text-input");
const inctroduceText = document.querySelector(".text-textarea");
const submitBtn = document.querySelector(".submit-btn");

const profileImgFile = document.querySelector(".profile-img-file");
const profileImgRound = document.querySelector(".profile-img-round");
const updateImgBtn = document.querySelector(".update-img-button");

let usercode = 0;
let principal = getPrincipal(); // principal.js에 있는

load();

function load() { // 처음으로 열렸을때
	$.ajax({
		type: "get",
		url: "/kys/profile/account/user",
		data: {
			usercode : principal.usercode
		},
		dataType: "text",
		success: function(data){
			let account = JSON.parse(data);
			pageLoad(account);
		},
		error: function(){
			alert("비동기 처리 오류");
		}
	});
	const profileImg = profileImgRound.querySelector('img');
	profileImg.src = getProfileImg(); // principal.js에 있는메소드. 프로필이미지 주소 가져오기
}

function pageLoad(account){
	usercode = account.usercode;
	profileUsername.textContent = account.username;
	textInputs[0].value = account.name;
	textInputs[1].value = account.username;
	textInputs[2].value = account.website;
	inctroduceText.value = account.introduce;
	textInputs[3].value = account.email;
	textInputs[4].value = account.phone;
	textInputs[5].value = account.gender;
}

submitBtn.onclick = () => {
	account = createAccount();
	$.ajax({
		type: "put",
		url: "/kys/profile/account/update",
		data: JSON.stringify(account),
		contentType: "application/json; charset=utf-8",
		dataType: "text",
		success: function(data){
			if(data == "true"){
				alert("회원정보 수정 완료.");
				location.replace("/kys/profile/account");
			}else {
				alert("이미 존재하는 사용자 이름입니다.");
			}
		},
		error: function(){
			alert("비동기 처리 오류");
		}
		
	});
}

function createAccount(){
	let account = {
		"usercode": usercode,
		"name": textInputs[0].value,
		"username": textInputs[1].value,
		"website": textInputs[2].value,
		"introduce": inctroduceText.value,
		"email": textInputs[3].value,
		"phone": textInputs[4].value,
		"gender": textInputs[5].value
	}
	
	return account;
}

profileImgRound.onclick = () => {
	imgChange();
}

updateImgBtn.onclick = () => {
	imgChange();	
}

function imgChange() {
	profileImgFile.click(); // 둘다 클릭시 파일선택창 뜨도록
	profileImgFile.onchange = () => {
		let reader = new FileReader();
		reader.onload = (e, f) => {
			let profileImgUrl = e.target.result;
			let originImgUrl = profileImgRound.querySelector('img').src;
			profileImgRound.querySelector('img').src = profileImgUrl;
			setTimeout(1000);
			if(confirm("프로필 이미지를 변경하시겠습니까?")) {
				let formData = new FormData(document.querySelector(".profile-box-form1"));
				$.ajax({
					type: "post",
					url:"/kys/profile/account/update/img",
					data: formData,
					encType: "multipart/form-data",
					processData : false,
					contentType : false,
					dataType : "text",
					success: function(data) {
						alert("프로필 이미지가 변경되었습니다.");
						location.reload();
					},
					error : function() {
						alert("비동기 처리 오류");
					}
				})
			} else {
				profileImgRound.querySelector('img').src = originImgUrl;
			}
		}
		reader.readAsDataURL(profileImgFile.files[0]);
	}
	
}

function showConfirm() {
	
}
