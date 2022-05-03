function getPrincipal(){
	let principal = null;
	$.ajax({
		type: "get",
		url: "/kys/api/principal",
		async: false,
		dataType: "text",
		success: function(data){
			principal = JSON.parse(data);
		},
		error: function(){
			alert("비동기 처리 오류");
		}
	});
	return principal;
}

function getProfileImg() {
	let imgUrl = null;
	$.ajax({
		type: "get",
		url: "/kys/api/profile/img",
		async: false,
		dataType: "text",
		success: function(data){
			imgUrl = data;
		},
		error: function(){
			alert("비동기 처리 오류");
		}
	});
	return imgUrl;
}