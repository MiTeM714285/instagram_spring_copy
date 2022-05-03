const profileImg = document.querySelector(".profile-img");
const bLogo = document.querySelector(".b-logo");

load();

function load() {
	profileImg.src = getProfileImg(); // principal.js에 있는메소드. 프로필이미지 주소 가져오기
	console.log(profileImg.src);
}

bLogo.onclick = () => {
	location.href = "/kys/";
}

profileImg.onclick = () => {
	location.href = "/kys/account/profile";
}