$(document).ready(function (){
  
  $("#signupBtn1").mouseenter(function () { 
    $(this).addClass("highlight");
  });
  $("#signupBtn1").mouseleave(function () { 
    $(this).removeClass("highlight");
  });

  $("#signupBtn2").mouseenter(function () { 
    $(this).addClass("highlight");
  });
  $("#signupBtn2").mouseleave(function () { 
    $(this).removeClass("highlight");
  });

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
      savelocalData();
      alert("회원가입 되었습니다.");
      location.replace("../index.html");
    }
  
  })
  
})

function savelocalData(){     
  const id = $("#uid").val();
  const pwd = $("#upw").val();
  let data = [id, pwd];

  // add new member
  // let newMember = [id, pwd];
  // data.push(newMember);

  // write JSON data
  localStorage.setItem("member" + (localStorage.length + 1), JSON.stringify(data));
}

