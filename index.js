var StName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var gpa = document.getElementById("gpa");
var btn = document.getElementById("Btn");

btn.addEventListener('click', function (pera){
    pera.preventDefault();

    if(StName.value==''){
        alert("Name is Empty");
    }
    else if(roll.value==''){
        alert("Roll is Empty");
    }
    else if(dept.value==''){
        alert("Dept is Empty");
    }
    else if(gpa.value==''){
        alert("Gpa is Empty");
    }
    else{
        var tbody = document.getElementById('tbody');
         var tr = document.createElement('tr');

         //for name
            var td = document.createElement('td');
            td.innerHTML=StName.value;
            tr.appendChild(td);

        //for id
        var td1 = document.createElement('td');
        td1.innerHTML=roll.value;
        tr.appendChild(td1);

        //for dept
        var td2 = document.createElement('td');
        td2.innerHTML=dept.value;
        tr.appendChild(td2);
        
        //for cgpa
        var td3 = document.createElement('td');
        td3.innerHTML=gpa.value;
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
    
});