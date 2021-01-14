$(document).ready(function() {
    
    $('[data-toggle=offcanvas]').click(function() {
      $('.row-offcanvas').toggleClass('active');
    });
      
  $.ajax({
    
    url:"http://localhost:3000/categories",
    method:"GET",
    datatype:"json",
   success:function(x){
       x.forEach((data)=>{
            $('.categories').append('<div class="col-xl-3 col-sm-6 py-2"><div class="card_group"><button type="button" class="close" id="'+data.id+'" aria-label="Close" onclick="deletequiz('+data.id+')"><span aria-hidden="true">&times;</span></button><div class="quizimage"><img   src="'+data.img+'" alt="'+data.name+'"></div><div class="card-body"><h4 class="card-title">'+data.name+'</h4><p class="card-text">Add Remove Edit Delete questions</p><a href="#" class="btn btn-primary">View</a></div></div></div>');
        })
   },

   error:(e)=>{
    alert("Error:"+e);
}
})



function post(){
   
  var category=$('#quiz').val();
  var img=$('#image').val();
  
  $.ajax({
      url:"http://localhost:3000/categories",
      method:"POST",
      data:{"name":category,"created-by":sessionStorage.getItem('adminId'),"img":img},
      datatype:"json",
          success:function(data){
            
          },
          error:(e)=>{
             alert("Error:"+e);
         }
  })
}



function deletequiz(id){
  
      
      $.ajax({
          url:"http://localhost:3000/categories/"+id,
          method:"DELETE",
          datatype:"json",
              success:function(data){
                
              },
              error:(e)=>{
                 alert("Error:"+e);
             }
      })
  }

  



  });

  function remove(){
    sessionStorage.clear();
  
    window.location.replace("./landingPage.html");
   }




