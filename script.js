function oksSwitchTab(tab_id, tab_content) {
    // first of all we get all tab content blocks (I think the best way to get them
    // by class names)
    var x = document.getElementsByClassName("tabcontent");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'; // hide all tab content
    }
    document.getElementById(tab_content).style.display = 'block'; // display the content of the tab we need
    // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
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