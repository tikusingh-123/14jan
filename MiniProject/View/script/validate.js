$(document).ready(function(){
    $('logout_btn').click(function(){
        var lastname = sessionStorage.getItem("response[i].username");
        alert(lastname);
    });
// User Login Authentication Query ---------------------
$('logout_btn').click(function(){
    var lastname = sessionStorage.getItem("response[i].username");
    alert(lastname);
});
// User Login Authentication Query ---------------------
$("#user_login_modal").click(function(){
    var username = $("#userEmail").val();
    var password = $("#userPass").val();
    
    var logged=false;
    if( username != "" && password != "" ){
        $.ajax({
            url:'http://localhost:3000/users',
            type:'get',
            success:function(response){
                for (var i=0; i < response.length; i++) {
                    if ( username == response[i].username && password == response[i].password){
                        var name = response[i].name;
                        var userId = response[i].id;
                        logged=true;
                        sessionStorage.setItem("isActive",1);
                        sessionStorage.setItem("username",name);
                        sessionStorage.setItem("userId",userId);
                       

                        loginSuccess();
                        // window.sessionStorage;
                        // sessionStorage.setItem("response[i].username", "response[i].id");
                    }
                  }
                
            } 
        });
    }
    $(".moreless-button").css("display","none");
    sessionStorage.setItem("user",x[0].email);
    $("#logout").css({"display":"flex"},{"flex-direction":"row"});
    var id=sessionStorage.getItem("currentPostId");
    if(sessionStorage.getItem("currentPostId"))
    {
        var x = location.href;
        var y = x.slice(0, 27)
        location.assign(y + "readMore.html" + "?id=" + id);
    }
    else
    {
     history.go();
    }
});
// Admin Login Authentication Query ------------------
    $("#admin_btn_submit").click(function(){
        var usernameAdmin = $("#adminEmail").val();
        var passwordAdmin = $("#adminPassword").val();
        var logged=false;
        if( usernameAdmin != "" && passwordAdmin != "" ){
            $.ajax({
                url:'http://localhost:3000/admin',
                type:'get',
                success:function(response){
                    for (var i=0; i < response.length; i++) {
                        if ( usernameAdmin == response[i].username && passwordAdmin == response[i].password){
                            var adminId=response[i].id;
                            logged=true;
                            sessionStorage.setItem("isActive",1);
                            sessionStorage.setItem("adminId",adminId);
                            adminLogin();
                        }
                      }
                }
            });
        }
    });

// Forgot password Query ----------------------------
    $('#forgot_pass').click(function(){
        var email = $('#emailForgotPass').val();
        var logged = false;
        var password;
        if(email != ''){
            $.ajax({
                url:'http://localhost:3000/users',
                type:'get',
                success:function(response){
                    for(var i =0;i< response.length; i++){
                        if( email == response[i].username)
                        {
                            logged=true;
                            password = response[i].password;
                        }
                    }
                    if(logged){
                        alert("Password for the user is : " +password);
                    }else{
                        alert("Oops....User not found...!!");
                    }
                }
            });
        }
    });


// Sign Up Modal for User ---------------------------

function validation(e){
    
    if (document.getElementById('rPassword').value != document.getElementById('password_again').value) {
      
        document.getElementById("repeat_pwd").innerHTML = "<p style='color:red'>Password is not matching!!!</p>";
        return false;
}
return true;
}

$("#signUp").click((e)=>{
    e.preventDefault();
    var flag = validation(e);
  
    if(flag){
        console.log("posting");
        var name=$("#Name").val();
        var email=$("#sEmail").val().toLowerCase();
        var password=$("#rPassword").val();
        if( email != "" && password != "" && name != ""){    
        $.ajax({
            url:"http://localhost:3000/users",
            method:"POST",
            data:{
                "name":name,
                "username": email,
                "password":password
            },
            success:(x)=>{
                alert("Registration successful...");
            },
            error:(e1)=>{
                alert("error"+e1);
            }
        
        });
    }
}else{
    alert("Form not complete");
}
    })  


// Caraousal Categories Data --------------------------
$.ajax({
    url: "http://localhost:3000/categories",
    method: "GET",
    success:(element)=>{
        for (var i = 0; i < element.length; i++) {
                $('#recipeCarousel').append(" <div class='col-md-4 col-sm-6 col-xs-12 col-lg-3 p-2 divAlign'><div class='card card-body peopleCarouselImg'><img class='img-fluid' src='"+element[i].img+"'><br><h2>"+element[i].name+"</h2> <br> <h4><h4></div></div> </div>")  ;

        } 
    }
});



// Counter Incrementer -------------------------------

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    function loginSuccess(){
        if(sessionStorage.getItem("isActive")){
            window.location.replace("../html/user_home.html");
        }
        else{
            window.location.replace("../html/error.html");
        }
    }

    function adminLogin(){
        if(sessionStorage.getItem("isActive")){
            window.location.replace("../html/admin.html");
        }
        else{
            window.location.replace("../html/error.html");
        }
    }
  

// Password Toggle --------------------- 

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


});





