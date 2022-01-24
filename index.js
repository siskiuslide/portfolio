const moreUpdates = document.querySelector('.moreUpdates')
const updates = document.querySelectorAll('.update')
const checkExtended = (updates) =>{
    let returnVal
    updates.some((upd)=>{upd.classList.contains('d-none') ? returnVal = false : returnVal = true })
    return returnVal
}
let extended = checkExtended(Array.from(document.querySelectorAll('.update')))
moreUpdates.addEventListener('click',(e)=>{
    //show the hidden updates
    updates.forEach((update, i) =>{
        if(extended === false){
            if(update.classList.contains('d-none')){
                update.classList.remove('d-none')
                update.classList.add('d-flex')
                
            }
        }
        else{
            if(i > 3 ){
                update.classList.add('d-none')
                update.classList.remove('d-flex')
            }
        }
    })

   extended = checkExtended(Array.from(document.querySelectorAll('.update')))
   extended === true ? e.target.textContent = 'Less' : e.target.textContent = 'More'
})