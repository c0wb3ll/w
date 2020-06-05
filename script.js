function oksSwitchTab(tab_id, tab_content) {
    var x = document.getElementsByClassName("tabcontent");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById(tab_content).style.display = 'block';
    
    var x = document.getElementsByClassName("tabmenu");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className = 'tabmenu';
    }
    document.getElementById(tab_id).className = 'tabmenu active';
    }

function login(){
	var id = prompt("Please input your ID","ID");
	var pw = prompt("Please input your Password","PW");

	if (id=='admin' && pw=='admin'){
		alert("Success Login ADMIN Address");
		location.href="home.html";
	}
	else if (id=='guest' && pw=='guest'){
		alert("Welcome Guest!! in c0wb3ll's Web!!");
		location.href="home.html";
	}
	else{
		alert("Try Again....");
	}
}