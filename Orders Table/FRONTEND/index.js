const serial=document.getElementById('serial')
const amount=document.getElementById('amount')
const dish=document.getElementById('dish')
const table=document.getElementById('table')
const button=document.getElementById('button')
const dishes=document.getElementById('dishes')

button.addEventListener('click', async (e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`http://127.0.0.1:3000/order/`,{
            price: amount.value,
            dish: dish.value,
            table: table.value
        })
        const target=document.getElementById(response.data.table)
        const order=document.createElement('li')
        order.setAttribute('id',response.data.id)
        order.appendChild(document.createTextNode(response.data.price+' Rs - '+response.data.table+' - '+response.data.dish+' '))
        
        const deleteDiv=document.createElement('div')
        deleteDiv.setAttribute('class',"btn-group btn-group-sm")
        deleteDiv.setAttribute('role',"group")
        deleteDiv.setAttribute('aria-label',"Small button group")
        const deleteOrder=document.createElement('button')
        deleteOrder.setAttribute('type',"button")
        deleteOrder.setAttribute('class',"btn btn-danger")
        const editOrder=document.createElement('button')
        editOrder.setAttribute('type',"button")
        editOrder.setAttribute('class',"btn btn-success")
        deleteOrder.appendChild(document.createTextNode('Delete'))
        editOrder.appendChild(document.createTextNode('Edit'))
        deleteDiv.appendChild(deleteOrder)
        deleteDiv.appendChild(editOrder)
        console.log(order);
        order.appendChild(deleteDiv)
        target.appendChild(order)
    } catch (error) {
        console.log(error);
    }
})

dishes.addEventListener('click', async (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-danger')){
        try {
            const parent=e.target.parentElement
            const Super=parent.parentElement
            const removal=document.getElementById(Super.parentElement.id)
            await axios.delete(`http://127.0.0.1:3000/order/${Super.id}`)
            // console.log(Super);
            removal.removeChild(Super)
        } catch (error) {
            console.error(error);
        }
    }
})

window.addEventListener('DOMContentLoaded', async ()=>{
    try {
        const response = await axios.get(`http://127.0.0.1:3000/order/`)
        for(i=0;i<response.data.length;i++){
            const target=document.getElementById(response.data[i].table)
            const order=document.createElement('li')
            order.setAttribute('id',response.data[i]._id)
            order.appendChild(document.createTextNode(response.data[i].price+' Rs - '+response.data[i].table+' - '+response.data[i].dish+' '))
            
            const deleteDiv=document.createElement('div')
            deleteDiv.setAttribute('class',"btn-group btn-group-sm")
            deleteDiv.setAttribute('role',"group")
            deleteDiv.setAttribute('aria-label',"Small button group")
            const deleteOrder=document.createElement('button')
            deleteOrder.setAttribute('type',"button")
            deleteOrder.setAttribute('class',"btn btn-danger")
            const editOrder=document.createElement('button')
            editOrder.setAttribute('type',"button")
            editOrder.setAttribute('class',"btn btn-success")
            deleteOrder.appendChild(document.createTextNode('Delete'))
            editOrder.appendChild(document.createTextNode('Edit'))
            deleteDiv.appendChild(deleteOrder)
            deleteDiv.appendChild(editOrder)

            order.appendChild(deleteDiv)
            target.appendChild(order)
        }
    } catch (error) {
        console.error(error);
    }
})