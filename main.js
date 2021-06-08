var student=[];
function submit(){
  var display=[];
  for(var i=1;i<=4;i++)  {
      var name=document.getElementById("name_of_the_student_"+i).value;
      console.log(name);
      student.push(name);
  }
  console.log(student);
  var len=student.length;
  for(var k=0;k<len;k++){
display.push("<h4> name-"+student[k]+"</h4>");
console.log(display);
  }

var rc=display.join(" ");
document.getElementById("display_name_without_commas").innerHTML=rc;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student.sort();
    var display_sort=[];
    var len=student.length;
    for(var k=0;k<len;k++){
  display_sort.push("<h4> name-"+student[k]+"</h4>");
  console.log(display_sort);
 
var rc=display_sort.join(" ");
document.getElementById("display_name_without_commas").innerHTML=rc;
    }
}