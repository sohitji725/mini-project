const itemselect = document.getElementById("item")
const todobox = document.querySelector('.to-do-box')

itemselect.addEventListener(
    "keyup",
    function(event){
        // console.log(event.key);
        if(event.key=='Enter'){
            // console.log(this.value)
            addtodo(this.value);
            this.value = ''
        }
    }
);

const addtodo = (item) => {
    const listitem = document.createElement('li');
    listitem.innerHTML = `
     ${item}  

    <i class="fa fa-times" aria-hidden="true"></i>                
    `;
   listitem.addEventListener(
    'click',
    function(){
        this.classList.toggle('done');

    }
   )
   listitem.querySelector('i').addEventListener(
    'click',
    function(){
        listitem.remove()
    }
   ) 
  todobox.appendChild(listitem);
};

 