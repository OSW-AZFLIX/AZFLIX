$(document).ready(function (){

  $("#loginBtn").mouseenter(function () { 
    $(this).addClass("highlight");
  });
  $("#loginBtn").mouseleave(function () { 
    $(this).removeClass("highlight");
  });

  $("#loginBtn").click(function(){
    var userdata = JSON.parse(JSON.stringify(Member));
    var id = $("#uid").val();
    var pwd = $("#upw").val(); 
    var search_fail = 1;

    if((id == "") || (pwd == "")){
      alert("이메일 또는 비밀번호를 입력하세요.");
    } else {
      for (var i = 0; i < userdata.members.length; i++) {
        if (userdata.members[i].ID.match(new RegExp(id, "i")) && userdata.members[i].PW.match(new RegExp(pwd, "i"))) {
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