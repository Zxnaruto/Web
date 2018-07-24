function check_name() {
	var name = document.getElementById("name").value;
	var name_msg = document.getElementById("name_msg");
	var reg = /^\w{3,20}$/;
	if(reg.test(name)) {
		name_msg.className = "";
		return true;
	} else {
		name_msg.className = "error_msg";
		return false;
	}
}

function check_pwd() {
	var pwd = document.getElementById("pwd").value;
	var pwd_msg = document.getElementById("pwd_msg");
	var reg = /^\w{6,20}$/;
	if(reg.test(pwd)) {
		pwd_msg.className = "";
		return true;
	} else {
		pwd_msg.className = "error_msg";
		return false;
	}
}