let head=document.querySelector("h3")
head.style.color="brown"
head.style.fontStyle="italic"




let tbody=document.querySelector("tbody")
let Fname=document.querySelector("#name")
let Sname=document.querySelector("#sname")
let Sage=document.querySelector("#sage")
let Semail=document.querySelector("#email")
let sexuality=document.querySelector("#gender")
let Submit =document.querySelector("submit")
Submit.addEventListener("click",()=>{
tbody.innerHTML += <tr>
<td>$`{Fname.value}`</td>
<td>$`{Sname.value}`</td>
<td>$`{Sage.value}`</td>
<td>$`{Semail.value}`</td>
<td>$`{sexuality.value}`</td>

</tr>
 Fname.value="";
 Sname.value="";
Sage.value="";
Semail.value="";
sexuality.value="";


})

