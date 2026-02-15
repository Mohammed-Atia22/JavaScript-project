let allStudents = [];
window.addEventListener("load", function() {
        fetch("http://localhost:3000/students")
        .then(res => res.json())
        .then(res => {
        console.log("Students Data", res);
        table5 = document.querySelector(".table");
        for(let i=0;i<res.length;i++){
            let employee = res[i];
            allStudents.push(res[i]);
            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td1.innerText = employee.Name;
            td1.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td1);
            td2 = document.createElement("td");
            td2.innerText = employee.Position;
            td2.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td2);
            td3 = document.createElement("td");
            td3.innerText = employee.Office;
            td3.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td3);
            td4 = document.createElement("td");
            td4.innerText = employee.Age;
            td4.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td4);
            td5 = document.createElement("td");
            td5.innerText = employee.StartDate;
            td5.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td5);
            td6 = document.createElement("td");
            td6.innerText = employee.Salary;
            td6.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td6);
            btn1 = document.createElement("button");
            // btn1.innerText = "Edit";
            // btn1.value = "Edit";
            btn1.innerHTML = '<a href="../indexUpdate.html">Update Student</a>';
            btn1.className = `btn ${employee.Id}`;
            btn1.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
            btn1.addEventListener("click",async function(e){
                //e.preventDefault();
                const res = await fetch(`http://localhost:3000/students/${employee.id}`);
                const data = await res.json();
                console.log(data);
                localStorage.setItem("id", employee.id);
            })
            td7 = document.createElement("td");
            td7.style.cssText = `border: 1px solid black;padding: 15px;`;
            td7.appendChild(btn1);
            tr.appendChild(td7);
            btn2 = document.createElement("button");
            // btn2.innerText = "Delete";
            // btn2.value = "Delete";
            btn2.innerHTML = '<a href="../indexUpdate.html">Delete Student</a>';
            btn2.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
            btn2.className = `btn ${employee.Id}`;
            btn2.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
            btn2.addEventListener("click",function(e){
                e.preventDefault();
                //console.log(id.value);
                fetch("http://localhost:3000/students/"+employee.id, {
                method: 'DELETE'
                }).then(res => res.json()).then(res => {
                console.log("RES", res);
                });
            })
            td8 = document.createElement("td");
            td8.style.cssText = `border: 1px solid black;padding: 15px;`;
            td8.appendChild(btn2);
            tr.appendChild(td8);
            table5.appendChild(tr);
        }
        let value=0;
        select = document.querySelector("#students");
        select.addEventListener("change",function(){
        value = parseInt(select.value);
        console.log(value);
        table5 = document.querySelector(".table");
        table5.innerHTML = "";
        for(let i=0;i<value;i++){
            console.log(allStudents[i]);
            let employee = allStudents[i];
            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td1.innerText = employee.Name;
            td1.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td1);
            td2 = document.createElement("td");
            td2.innerText = employee.Position;
            td2.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td2);
            td3 = document.createElement("td");
            td3.innerText = employee.Office;
            td3.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td3);
            td4 = document.createElement("td");
            td4.innerText = employee.Age;
            td4.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td4);
            td5 = document.createElement("td");
            td5.innerText = employee.StartDate;
            td5.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td5);
            td6 = document.createElement("td");
            td6.innerText = employee.Salary;
            td6.style.cssText = `border: 1px solid black;padding: 15px`;
            tr.appendChild(td6);
            btn1 = document.createElement("button");
            // btn1.innerText = "Edit";
            // btn1.value = "Edit";
            btn1.innerHTML = '<a href="../indexUpdate.html">Update Student</a>';
            btn1.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
            td7 = document.createElement("td");
            td7.style.cssText = `border: 1px solid black;padding: 15px;`;
            td7.appendChild(btn1);
            tr.appendChild(td7);
            btn2 = document.createElement("button");
            // btn2.innerText = "Delete";
            // btn2.value = "Delete";
            btn1.innerHTML = '<a href="../indexUpdate.html">Delete Student</a>';
                btn1.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
            btn2.style.cssText = `width:100%;height:50%;background-color:blue;cursor:pointer;color:white`;
            td8 = document.createElement("td");
            td8.style.cssText = `border: 1px solid black;padding: 15px;`;
            td8.appendChild(btn2);
            tr.appendChild(td8);
            table5.appendChild(tr);
        }
    })
    search = document.querySelector("#search");
    search.addEventListener("input", function(e) {
        console.log(e.target.value);
        s = e.target.value;
        table5 = document.querySelector(".table");
        table5.innerHTML = "";
        for(let i=0;i<allStudents.length;i++){
            console.log(allStudents[i]);
            let employee = allStudents[i];
            if(employee.Name.includes(s)){
                tr = document.createElement("tr");
                td1 = document.createElement("td");
                td1.innerText = employee.Name;
                td1.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td1);
                td2 = document.createElement("td");
                td2.innerText = employee.Position;
                td2.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td2);
                td3 = document.createElement("td");
                td3.innerText = employee.Office;
                td3.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td3);
                td4 = document.createElement("td");
                td4.innerText = employee.Age;
                td4.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td4);
                td5 = document.createElement("td");
                td5.innerText = employee.StartDate;
                td5.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td5);
                td6 = document.createElement("td");
                td6.innerText = employee.Salary;
                td6.style.cssText = `border: 1px solid black;padding: 15px`;
                tr.appendChild(td6);
                btn1 = document.createElement("button");
                // btn1.innerText = "Edit";
                // btn1.value = "Edit";
                btn1.innerHTML = '<a href="../indexUpdate.html">Update Student</a>';
                btn1.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
                td7 = document.createElement("td");
                td7.style.cssText = `border: 1px solid black;padding: 15px;`;
                td7.appendChild(btn1);
                tr.appendChild(td7);
                btn2 = document.createElement("button");
                // btn2.innerText = "Delete";
                // btn2.value = "Delete";
                btn2.innerHTML = '<a href="../indexDelete.html">Delete Student</a>';
                btn2.style.cssText = `width:100%;height:50%;cursor:pointer;color:white`;
                td8 = document.createElement("td");
                td8.style.cssText = `border: 1px solid black;padding: 15px;`;
                td8.appendChild(btn2);
                tr.appendChild(td8);
                table5.appendChild(tr);
            }
        }
    });
    });
});


//npx json-server --watch ./modules/db.json --port 3000