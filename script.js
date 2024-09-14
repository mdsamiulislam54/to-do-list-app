let addTask_fild =document.getElementById('addTask_fild')
let addButton =document.getElementById('addButton')
let task_list =document.getElementById('task_list');
let delete_btn =document.getElementById('delete_btn')




function getCurrentTime(){
    let now = new Date()

    let hours = now.getHours().toString().padStart(2,'0');
    let minutes= now.getMinutes().toString().padStart(2,'0');
    let second = now.getSeconds().toString().padStart(2,'0');

    return `${hours} : ${minutes}: ${second}`
}



addButton.addEventListener('click',(e)=>{
   

    let input_value = addTask_fild.value
    if(input_value !==''){

        let listIteam = document.createElement('li')
        listIteam.style.listStyle='none'

        checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.value=input_value
        let taskText = document.createTextNode(`${input_value} - add time ${getCurrentTime()}`);
        listIteam.appendChild(checkbox)
        listIteam.appendChild(taskText)
        
        task_list.appendChild(listIteam)

        addTask_fild.value=''

    }
})
delete_btn.addEventListener('click', () => {
    let listItems = task_list.querySelectorAll('li');
    listItems.forEach(item => {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            task_list.removeChild(item);
        }
    });
});


function colorGen(){
    let randdomNumbar = Math.floor(Math.random()* 16777244)
    const randomCode = "#" + randdomNumbar.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorcode').innerText=randdomNumbar

}

document.getElementById("rendom_color").addEventListener(
    "click",
    colorGen
)

colorGen()