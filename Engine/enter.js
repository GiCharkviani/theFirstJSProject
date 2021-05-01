//ავტორიზაციისას


let logIn = document.querySelector('[logIn]')


let users = ['Exam', 'Giorgi'];

let nickName = document.querySelector('[nickName]') 

function logIna(){
    for(let i = 0; i < users.length; i++){
        if(users[i] == nickName.value){
            window.location.href = './Engine/menu.html'
        }
    }
}
    
