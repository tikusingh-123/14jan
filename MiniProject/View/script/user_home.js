$("document").ready(()=>{
    
    let i = 0;    
    let imgUrl = "https://syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg";
    //let quizDom = '<div class="card col" style="width: 18rem;"><img class="card-img-top" src='+'${imgUrl}'+'alt="Card image cap"><div class="card-body"><h5 class="card-title">HTML Quiz</h5><p class="card-text">HTML Quiz to test ability.</p><a href="#" class="btn btn-success">Load Quiz</a></div></div>';
    // 
    
    $('#test').html();
    
   $.ajax({
       type: "GET",
       url: "http://localhost:3000/categories",
       success: function (response) {
        response.forEach(element => {
            // let quizDom = `<div class="col-md-3 col-sm-4 col-lg-3 "><div class="card mb-3 size-img"><img class="card-img-top" src=${element.img} alt="Card image cap"><div class="card-body"><h5 class="card-title">${element.name}</h5><p class="card-text">${element.data}</p><button class="btn border-0 text-white" value="${element.id}">Load Quiz</button></div></div></div>`;
            let quizDom = "<div class='col-md-4 col-sm-6 col-xs-12 col-lg-3 p-2 divAlign'><div class='card card-body peopleCarouselImg'><img class='img-fluid' src='"+element.img+"'><h2>"+element.name+"</h2> <br> <h4> <button class='btn text-white ' onclick='startQuiz(this);'  value='"+ element.id+","+element.name+"'> Start </button>  <h4></div></div> </div>";
            $('#quizcard').append(quizDom);
        });
       }
   });

   var userName = sessionStorage.getItem("username");
//    console.log(userName);

   $('.username_session').append(userName);


   if (sessionStorage.getItem('isActive') ) {
  
 }else{
    window.open("../html/error.html", "_self");
 }
  
});

function startQuiz(e) {  
    let data = e.value.split(',');
    sessionStorage.setItem("categoryId",data[0]);
    sessionStorage.setItem("title",data[1]);
    window.location.replace("../html/quizPage.html");
}

function remove(){
    sessionStorage.clear();

    window.location.replace("./landingPage.html");
   }
