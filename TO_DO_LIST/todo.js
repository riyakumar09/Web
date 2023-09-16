var ul = document.getElementById('list')    
var li;
var addButton = document.getElementById('add')  
addButton.addEventListener("click",addItem)

function addItem(){                         
    var input = document.getElementById('input')        
    var item = input.value;                
    var textNode = document.createTextNode(item)    
    if (item == '') {       
        msg= "Enter your Task"
        alert(msg)
        return false
        
    } else {                
        li = document.createElement('li')       
        let checkbox = document.createElement('input')         
        checkbox.type = 'checkbox'              
        checkbox.setAttribute('id','check')         
       
        let label = document.createElement('label')         

        ul.appendChild(label)                       
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(()=>{
            li.className = 'visual'
        },5)
        input.value = " "               
    }
}

var removeButton = document.getElementById('remove')        
removeButton.addEventListener("click",removeItem)       

function removeItem(){              
    li=ul.children
    for (let index = 0; index < li.length; index++) {   
        const element = li[index];              
        while(li[index] && li[index].children[0].checked){      
            ul.removeChild(li[index])
        }
        
    }   
}
