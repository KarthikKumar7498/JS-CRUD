var fname =[];
var area=[];
var phno=[];
var complaint=[];
var address=[];
var selectedRow = null

function crud() 
{
  console.log("entered");
  if((document.forms.complaintForm.name.value == "")&&(document.forms.complaintForm.phno.value == "")&&(document.forms.complaintForm.address.value == "")&&(document.forms.complaintForm.area.value == "")&&(document.forms.complaintForm.complaint.value == ""))
{
alert("Ensure that you have entered all details and then try submitting");
}
  else if(document.forms.complaintForm.name.value == "")
{
    alert("Enter your Name");
}
else if(document.forms.complaintForm.name.value.length>=40)
{
  alert("Enter a valid full name");
}
else if(document.forms.complaintForm.phno.value == "")
{
    alert("Enter your Phone no");
}
else if(document.forms.complaintForm.phno.value.length!=10)
{
  alert("Enter a valid phone number of 10 digits");
}
else if(document.forms.complaintForm.address.value == "")
{
    alert("Enter your address");
}
else if(document.forms.complaintForm.address.value.length>=100)
{
  alert("Enter a proper address keeping in mind the character limit is between 0 and 100");
}
else if(document.forms.complaintForm.area.value == "")
{
    alert("Enter the area of occurance ");
}
else if(document.forms.complaintForm.area.value.length>=25)
{
  alert("Enter an area keeping in mind the character limit is between 0 and 25");
}
else if(document.forms.complaintForm.complaint.value == "")
{
      alert("Enter the complaint");
}
else if(document.forms.complaintForm.complaint.value.length>=250)
{
  alert("Character limit exceeded - Enter a crisp complaint")
}

else{
    //name//
   if(window.localStorage["fname"] != null)
 {fname = JSON.parse(window.localStorage["fname"]);}
    fname.push(document.forms.complaintForm.name.value);
    window.localStorage["fname"] = JSON.stringify(fname);
//mail//
    if(window.localStorage["phno"] != null)
   {phno = JSON.parse(window.localStorage["phno"]);}
    phno.push(document.forms.complaintForm.phno.value)
    window.localStorage["phno"] = JSON.stringify(phno);
//phno/
if(window.localStorage["address"] != null)
{address = JSON.parse(window.localStorage["address"]);}
address.push(document.forms.complaintForm.address.value);
window.localStorage["phno"] = JSON.stringify(address);
//dob//
if(window.localStorage["area"] != null)
{area = JSON.parse(window.localStorage["area"]);}
area.push(document.forms.complaintForm.area.value);
window.localStorage["area"] = JSON.stringify(area);
//EQ
if(window.localStorage["complaint"] != null)
{complaint = JSON.parse(window.localStorage["complaint"]);}
complaint.push(document.forms.complaintForm.complaint.value);
window.localStorage["complaint"] = JSON.stringify(complaint);

alert("Succesfully filed a complaint")
onFormSubmit();


}
}


function onFormSubmit() {
   
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["phno"] = document.getElementById("phno").value;
    formData["address"] = document.getElementById("address").value;
    formData["area"] = document.getElementById("area").value;
    formData["complaint"] = document.getElementById("complaint").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("displayComplaint").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phno;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.area;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.complaint;
    cell6 = newRow.insertCell(5);
    
    cell6.innerHTML = `<button id="edit" onClick="onEdit(this)">Edit</button><br>
                       <button id="delete" onClick="onDelete(this)">Delete</button>`;
                      
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("phno").value = "";
    document.getElementById("address").value = "";
    document.getElementById("area").value = "";
    document.getElementById("complaint").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("area").value = selectedRow.cells[3].innerHTML;
    document.getElementById("complaint").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.phno;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.area;
    selectedRow.cells[4].innerHTML = formData.complaint;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("displayComplaint").deleteRow(row.rowIndex);
        resetForm();
    }
}

function trackStatus(){
    setTimeout(function() { alert("Your Case has been Accepted by police officer KK"); }, 1000);
    setTimeout(function() { alert("Your Case is on progress"); }, 6000);
    setTimeout(function() { alert("Collecting evidences "); }, 8000);
    setTimeout(function() { alert("Working on the evidences"); }, 10000);
    setTimeout(function() { alert("Tada , your case got solved!"); }, 12000);
    setTimeout(function() { alert("Thanks for patiently waiting"); }, 14000);
}

