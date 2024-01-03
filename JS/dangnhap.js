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


function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ps = document.getElementById('repert-password').value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    if(ps == password){
      alert("dang ky thanh cong");
    }else{
      alert("nhap lại passwword");
    }

  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("VUI LONGF NHẬP USERNMAE, PASSWORD, EMAIL");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("dang nhap thanh cong");
      window.location.href = "trangchu.html";
    } else {
      alert("dang nhap that bai");
    }
  }

  function kq() {  

  var e = document.getElementById("nn");
  var giaTri = e.options[e.selectedIndex].text;     
  var checkbox = document.getElementsByName("gioitinh");
  for (var i = 0; i < checkbox.length; i++){
      if (checkbox[i].checked === true){
         o =checkbox[i].value;
      }
  }
    user = document.getElementById('username').value;
    pw = document.getElementById('password').value;
    email = document.getElementById('email').value;
    

    if(user == "" && pw == "" && email == ""){
    }else{
      var x=document.getElementById('tb').insertRow(2);
      var a = x.insertCell(0);
      var b = x.insertCell(1);
      var c = x.insertCell(2);
      var d = x.insertCell(3);
      var e = x.insertCell(4);
      var g = x.insertCell(5);
      var f = x.insertCell(6);
      var k = x.insertCell(7); 
      var l = x.insertCell(8);
      a.innerHTML=document.getElementById('username').value;
      b.innerHTML=document.getElementById('password').value;
      c.innerHTML=document.getElementById('hoten').value;
      d.innerHTML=o;
      e.innerHTML=document.getElementById('ns').value;
      g.innerHTML=giaTri;
      f.innerHTML=document.getElementById('email').value;
      k.innerHTML=document.getElementById('tel').value;
      l.innerHTML=document.getElementById('gc').value;
    }
}	

