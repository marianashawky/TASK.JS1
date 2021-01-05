
userKeys =["tasktitle","catagery","content"]
users = [
    {tasktitle: "task1", catagery: "t1", content: "llllllllllllll"},
    {tasktitle: "task1", catagery: "t2", content: "llllllllllllll"},]

addUserForm = document.querySelector('#formtask')

usercard = document.querySelector('#usercard')

document.querySelector("#showHide").addEventListener ("click", function (e){
    // this.textContent=="show"?  this.textContent="hide":this.textContent="show";
    if ( this.textContent=="show" ) {
        this.textContent="hide"
    } else {
        this.textContent="show"
    }
    document.querySelector("#formsection").classList.toggle("d-none")
})

addUserForm.addEventListener('submit', function(e){
})




// let showuser  = functin 




 // e.preventDefault()
 // data= this.elements

 //   let user = { }

 // userKeys.forEach( Element => {
        
 //   user[Element] = data[Element].value
 // })
 // users.push(user)
 // addUserForm.reset()
 // console.log(users)



// ..........................................................................
//      user = {
//         tasktitle: data.tasktitle.value,
//         catagery: data.catagery.value,
//         content: data.content.value,
//     }
    // users.push(user)
    // addUserForm.reset()
    // console.log(users)
