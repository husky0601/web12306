window.onload = function(){
	
	var btn = document.getElementById("button");
	
	btn.onclick = function () {
		// body...
		var name = document.getElementById("name").value;
	    var password = document.getElementById("pwd").value;
		if (name == "admin"&&password == "123456xy") {
			alert("登录成功");
			window.location="index.html";
		}
		else{
			alert("用户名或密码错误，请重新输入！");

		}

	}

}

	