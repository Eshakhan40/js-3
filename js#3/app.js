var studentsnames = []; //empty arrray using JS literal notation //
 var a = {
  namesofstudents: "", //  empty array using JS object notation
};

var names=["Tony","Michael","john"]
var scores=[480,320,230];
var tony=(480/500 )*100;
var Michael=(320/500 )*100;
var John =(230/500 )*100;
document.write("Score of Michael is:" +scores[2]+ "percentage:" + Michael+ "%" +"<br>");
document.write("Score of  Tony is:" +scores[1]+ "percentage:" + tony+ "%" +"<br>");
document.write("Score of John is:" +scores[3]+ "percentage:" + John+ "%" +"<br>");
var num=[1,2,3,4,5,6,7,8,9]
document .write(num + " <br>")
var name =["Aliza","sana" ,"Ifra"]
document.write( name+"<br>")
var boolean=[ undefined,true,false,null]
document.write(boolean +"<br>")
var mixed=[3,undefined,"hi","hello",true,false]
document.write(mixed +"<br>")
var degree=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
document.write("1)"+ degree[1] +"<br>")
document.write("2)"+ degree[2] +"<br>")
document.write("3)"+ degree[3] +"<br>")
document.write("4)"+ degree[4] +"<br>")
document.write("5)"+ degree[5] +"<br>")
document.write("6)"+ degree[6] +"<br>")
document.write("7)"+ degree[7] +"<br>")
var score=[320,230,480,120]
document.write("Scores of stuents:" + score+"<br>")
document.write("Ordered Scores of students:" + 120 +"," +230+"," +320 + "," +480 +"<br>")
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities list:" +"<br>")
document.write( cities+"<br>")
document.write("Selected cities list:"+"<br>")
document.write(cities[1]+","+ cities[3]+"," +cities[2])
var sen=["This",  "is", "my", "cat"]
document.write("Array:" +"<br>")
document.write(sen +"<br>")
document.write("String:" +"<br>")

document.write(sen.join("") +"<br>")
var dev=["Monitor","Printer","Mouse","Keyboard"]
document.write(dev +"<br>")
document.write("out:"+"<br>" + dev[1] +"<br>")
document.write("out:"+"<br>" + dev[2] +"<br>")
document.write("out:"+"<br>" + dev[3] +"<br>")
document.write("out:"+"<br>" + dev[4] +"<br>")
var mobiles=["Apple","Samsung","Motorola","Nokia","Sony & Haier"]
document.write( mobiles[0] +"<br>")
document.write( mobiles[1] +"<br>")
document.write( mobiles[2] +"<br>")
document.write( mobiles[3] +"<br>")
document.write( mobiles[4] +"<br>")
var color=["Black","Blue","Red"]
document.write(color +"<br>")
var a=prompt("what you want to add colors i starting?");color.unshift(a)

document.write("user choice color in starting : " +a+","+ color+  "<br>");
var b=prompt("what color you want to add in the end?");color.push(b)
document.write("user choice color in last :" +a+","+color+"," +b+ "<br>")
var c=prompt("what color you want to del from starting?")
document.write("deleted color from start:" +c+",+" +a+"," +b+"<br>")