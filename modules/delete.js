
id = document.querySelector("#id");
submit = document.querySelector(".submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    console.log(id.value);
    fetch("http://localhost:3000/students/"+id.value, {
            method: 'DELETE'
        }).then(res => res.json()).then(res => {
            console.log("RES", res);
        });
})