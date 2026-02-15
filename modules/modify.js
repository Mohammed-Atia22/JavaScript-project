Id0 = document.querySelector("#Id0");
Id = document.querySelector("#Id");
Name = document.querySelector("#Name");
Position = document.querySelector("#Position");
Office = document.querySelector("#Office");
Age = document.querySelector("#Age");
startDate = document.querySelector("#startDate");
Salary = document.querySelector("#Salary");

LID = localStorage.getItem("id");
// console.log(LID);
let data2;
async function getData(LID){
    const res = await fetch(`http://localhost:3000/students/${LID}`);
    const data = await res.json();
    console.log(data);
    Id0.value = data.id;
    Id.value = data.Id;
    Name.value = data.Name;
    Position.value = data.Position;
    Office.value = data.Office;
    Age.value = data.Age;
    startDate.value = data.startDate;
    Salary.value = data.Salary;
}
getData(LID)


submit = document.querySelector(".submit");
        submit.addEventListener("click",function(e){
            e.preventDefault();
            
            if(parseInt(Id.value) <= 0 || !Id.value){
                alert("Enter right ID");
            }
            
            if(!Name.value||Name.value.length<8){
                alert("The Name Must Be More Than 8 Chars Length");
            }
            
            if(!Position.value){
                alert("You have to write your position");
            }
            
            if(!Office.value){
                alert("You have to write your Office");
            }
            
            if(!Age.value||parseInt(Age.value)<=0){
                alert("Enter valid Age value")
            }
           
            if(!startDate.value){
                alert("You have to write your startDate");
            }
            
            if(!Salary.value){
                alert("You have to write your Salary");
            }
            console.log(Id.value);
            fetch("http://localhost:3000/students/"+LID, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Id:Id.value,
                Name:Name.value,
                Position:Position.value,
                Office:Office.value,
                Age:Age.value,
                StartDate:startDate.value,
                Salary:Salary.value
            })
            })
            .then(res => res.json())
            .then(console.log);
        })
