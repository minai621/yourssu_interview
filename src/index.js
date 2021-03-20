import { getAllUser, addOneUser, removeOneUser } from "./api/index.js";
// write your code
console.log("Hello, Yourssu!");

const userArr = getAllUser();
console.log(userArr);
const userDelete = removeOneUser();


const userTable = document.querySelector("#yourssu_list");


var usertr = [];
var usertd = [];

var userCell = [];
console.log(userTable);

var userObject = [];

userArr.then(
    (Arr) => {
        for(let i = 0; i < Arr.data.length ; i++){

            userObject[i] = {
                id : Arr.data[i]. id,
                name : Arr.data[i].name,
                email : Arr.data[i].email,
                nickname : Arr.data[i].nickname
            };
            
            usertr[i] = userTable.insertRow();
            usertd[i] = usertr[i].insertCell(0);
            usertd[i].textContent = userObject[i].name;
            usertd[i] = usertr[i].insertCell(1);
            usertd[i].textContent = userObject[i].nickname;
            usertd[i] = usertr[i].insertCell(2);
            usertd[i].textContent = userObject[i].email;
            usertd[i] = usertr[i].insertCell(3);
            usertd[i].textContent = "삭제";
            usertd[i].setAttribute("id", "delete-btn");
            console.log(usertd[i]);
        }
    }
)

const registration = document.querySelector('.btn-btn-primary').addEventListener('click', transmit);


 function transmit(){
    const NewUserName = document.getElementById('username').value;
    const NewUserNickName = document.getElementById('nickname').value;
    const NewUserEmail = document.getElementById('email').value;
    const userAdd = addOneUser(NewUserName, NewUserNickName, NewUserEmail);
    userAdd.then(
        (stat) => {
            console.log(stat.data);
            (function (){

                const userArr2 = getAllUser();

                userArr2.then(

                    (Arr2) => {

                            console.log(Arr2.data);
                            if(isNaN(stat.id-1))
                            
                            userObject[stat.id-1] = {
                            id: isNaN(stat.id-1) ? stat.data : stat.id-1,
                            name : NewUserEmail,
                            email : NewUserEmail,
                            nickname : NewUserNickName
                        };
            
                        usertr[stat.id-1] = userTable.insertRow();
                        usertd[stat.id-1] = usertr[stat.id-1].insertCell(0);
                        usertd[stat.id-1].textContent = userObject[stat.id-1].name;
                        usertd[stat.id-1] = usertr[stat.id-1].insertCell(1);
                        usertd[stat.id-1].textContent = userObject[stat.id-1].nickname;
                        usertd[stat.id-1] = usertr[stat.id-1].insertCell(2);
                        usertd[stat.id-1].textContent = userObject[stat.id-1].email;
                        usertd[stat.id-1] = usertr[stat.id-1].insertCell(3);
                        usertd[stat.id-1].textContent = "삭제";
            
                    }
                );
            })()
        }
    )
}

/*
새로고침시 api정보를 로컬스토리지에 저장한 뒤 새로고침 후 불러오려 했으나 실패
삭제버튼 구현실패.
const refreshbtn = document.querySelector('#refresh').addEventListener('click', clickRefresh);

function clickRefresh(){
    userArr.then(.
        (Arr3) => {
            localStorage.setItem('object', JSON.stringify({a: 'b'}));
        }
    )
    location.reload(true);
    JSON.parse(localStorage.getItem('object'));
}
*/