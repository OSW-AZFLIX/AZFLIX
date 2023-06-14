$(document).ready(function (){

  $("#loginBtn").mouseenter(function () { 
    $(this).addClass("highlight");
  });
  $("#loginBtn").mouseleave(function () { 
    $(this).removeClass("highlight");
  });

  $("#loginBtn").click(function(){
    var id = $("#uid").val();
    var pwd = $("#upw").val(); 
    var data= [];
    var search_fail = 1;

  
    if((id == "") || (pwd == "")){
      alert("이메일 또는 비밀번호를 입력하세요.");
    } else {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = JSON.parse(localStorage.getItem(key));
        
        if (value[0] == id && value[1] == pwd) {
          search_fail = 0;
          location.replace("infopage_movie.html");
        }
      }

      if(search_fail == 1){
        alert("이메일 또는 비밀번호를 확인하세요.");
      }
    }

  })
})