//to update the table dynamically
 $(document).ready(function () { 

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("http://localhost:3000/questions",  
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td><input type="radio" value="'+value.id+'"/></td>';
            
            student += '<td>' +  
                value.id + '</td>'; 


                student += '<td>' +  
                value.categoryId + '</td>'; 


            
            student += '<td>' +  
                value.question + '</td>'; 

            student += '<td>' +  
                value.option1 + '</td>'; 

            student += '<td>' +  
                value.option2 + '</td>'; 

            student += '<td>' +  
                value.option3 + '</td>'; 
                                       
            student += '<td>' +  
                value.option4 + '</td>'; 
            student += '<td>' +  
                value.answer + '</td>'; 

             
            student += '<td><button type="button" id="edit'+value.id+'" value="'+value.id+'" onclick="editrow('+value.id+',\''+value.question+'\',\''+value.option1+'\',\''+value.option2+'\',\''+value.option3+'\',\''+value.option4+'\',\''+value.answer+'\',\''+value.img+'\')"/>EDIT</button></td>';
                
            student += '<td><input type="submit" id="button'+value.id+'" value="delete" onclick="deleterow('+value.id+')"/></td>';
            

            student += '</tr>'; 
        }); 
          
      //  $('#question').DataTable();
        //INSERTING ROWS INTO TABLE  
        $('#questiontable').append(student); 
    }); 
}); 



//to post data into json file using form fields.(create)


let movies = [];

const addMovie = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        //id: $('#questionid').val(),
       categoryId:1,
       question: $('#question').val(),
        option1: $('#op1').val(),
        option2: $('#op2').val(),
        option3: $('#op3').val(),
        option4: $('#op4').val(),
        answer :$('#correct').val(),
        img: $('#imgurl').val()

    }
    

  console.log("adding")

  $.ajax({
      url:"http://localhost:3000/questions",
      type: "post",

      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
      data: JSON.stringify(movie),

      });
      e.preventDefault();

    



}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});



//to update json file using (edit tab)
const updatequestion = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        //id: $('#editquestionid').val(),
        question: $('#editquestion').val(),
        option1: $('#editop1').val(),
        option2: $('#editop2').val(),
        option3: $('#editop3').val(),
        option4: $('#editop4').val(),
        answer :$('#editcorrect').val(),
        img : $('#editimgurl').val()
    }
    
    
  console.log("updating")

  var u= $(editquestionid).val();

  $.ajax({
      url:"http://localhost:3000/questions/"+u,
      type: "patch",

      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
      data: JSON.stringify(movie),

      });
    

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('patch1').addEventListener('click', updatequestion);
});

//to delete a question array in json file using question id (delete tab)

const deletequestion = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
   
    
   

  
  
  console.log("deleting")

  var d= $(deletequestionid).val();

  $.ajax({
      url:"http://localhost:3000/questions/"+d,
      type: "delete",
      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
     
      });
    

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('delete1').addEventListener('click', deletequestion);
});



//for delete function

  function deleterow(id){

  
  console.log("deleting")


  $.ajax({
      url:"http://localhost:3000/questions/"+id,
      type: "delete",
      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
       

      },
     
      });
    
}

function editrow(id,q,op1,op2,op3,op4,answer,url)
{

    $('#editquestionid').val(id);
   $('#editquestion').val(q);
   $('#editop1').val(op1);
    $('#editop2').val(op2);
    $('#editop3').val(op3);
    $('#editop4').val(op4);
   $('#editcorrect').val(answer);
   $('#editimgurl').val(url);

    console.log("editing");

}
//filter functionality
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#questiontable1 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});






