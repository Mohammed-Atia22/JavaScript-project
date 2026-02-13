
submit = document.querySelector(".submit");
        submit.addEventListener("click",function(e){
            e.preventDefault();
            Id0 = document.querySelector("#Id0");
            Id = document.querySelector("#Id");
            if(parseInt(Id.value) <= 0 || !Id.value){
                alert("Enter right ID");
            }
            Name = document.querySelector("#Name");
            if(!Name.value||Name.value.length<8){
                alert("The Name Must Be More Than 8 Chars Length");
            }
            Position = document.querySelector("#Position");
            if(!Position.value){
                alert("You have to write your position");
            }
            Office = document.querySelector("#Office");
            if(!Office.value){
                alert("You have to write your Office");
            }
            Age = document.querySelector("#Age");
            if(!Age.value||parseInt(Age.value)<=0){
                alert("Enter valid Age value")
            }
            startDate = document.querySelector("#startDate");
            if(!startDate.value){
                alert("You have to write your startDate");
            }
            Salary = document.querySelector("#Salary");
            if(!Salary.value){
                alert("You have to write your Salary");
            }
            console.log(Id.value);
            fetch("http://localhost:3000/students/"+Id0.value, {
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