$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

function kq() {
    alert("jsdjbasd");
// 	var radio = document.getElementsByName("gioitinh");
//                 for (var i = 0; i < radio.length; i++){
//                     if (radio[i].radio === true){
//                         e=radio[i].value;
// }}
// 	var f = document.getElementById('sp');
// 	var giaTri = f.options[f.selectedIndex].text;
// 		var x=document.getElementById('tb').insertRow(2);
// 		var y = x.insertCell(0);
// 		var z = x.insertCell(1);
// 		var a = x.insertCell(2);
// 		var b = x.insertCell(3);
// 		var c = x.insertCell(4);
// 		var d = x.insertCell(5);
// 		var m = x.insertCell(6);
// 		var n = x.insertCell(7); 
// 		var h = x.insertCell(8);
// 		y.innerHTML=document.getElementById('username').value;
// 		z.innerHTML=document.getElementById('password').value;
// 		a.innerHTML=document.getElementById('hoten').value;
// 		c.innerHTML=e;
// 		d.innerHTML=document.getElementById('ns').value;
// 		m.innerHTML=document.getElementById('nn').value;
// 		n.innerHTML=document.getElementById('email').value;
// 		h.innerHTML=document.getElementById('tel').value;
}	
