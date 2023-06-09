$(function (){
  
  $("#signupBtn1").click(function(){
    var input_id = $("#uid").val();
    var validateEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if(!validateEmail.test(input_id)) {
      alert("이메일을 입력하세요.");
    } else {
      $(".signup-email-body").css("display", "none");
      $(".signup-pwd-body").css("display", "block");
    }

  })

  $("#signupBtn2").click(function(){
    var input_pwd = $("#upw").val();
  
    if(input_pwd == "") {
      alert("비밀번호를 입력하세요.");
    } else if($("#cbtn1").is(":checked") == false) {
      alert("개인정보 약관동의는 필수입니다.");
    } else {
      
      alert("회원가입 되었습니다.");
      location.replace("infopage.html");
    }
  
  })
  
})

