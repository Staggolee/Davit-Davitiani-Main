'use strict';

const addBtn = document.querySelector('#addDay'),
      remBtn = document.querySelector('#remDay'),
      updBtn = document.querySelector('#update'),
      addSt = document.querySelector('#addStud'),
      remSt = document.querySelector('#remStud')


/* 
array for students,
array for days,
functions that adds students arr & days arr,
functions that removes students and days,
function that addes grades for students,
function that updates average grade
 

*/

// let students = [];
// let days = [];
let base = {
    students: {
        name: [],
        id: [],
        grade: []
    },
    days: {
        number: [],
        months: [],
    }

    };

    


function StudentController(name, id, grade) {
    this.name = name;
    this.id = id;
    this.grade = grade;
};


function addStudent() {
    let person = prompt("enter student name", "john doe");
    if(person != null) {
        let studList = base.students.name;
        let html = `<div class="student"><div id="avg-student">0</div>
        <div id="student">${person}</div></div>`;
    
        studList.push(`${person}`);
            // console.log(studList);
           let insStudent = document.querySelector('.students');
           insStudent.insertAdjacentHTML('beforeend', html);
           

           
           console.log(insStudent)
           
        }
    };

function addDay() {
    let months, days, startDate, nextDate, getStartDate, decentDay, dayHtml, dayStud;
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    startDate = new Date(2018, 3, 28);
    getStartDate = startDate.getDate();
    
    // base.days.months.push(months);
    // base.days.number.push(getStartDate);
    decentDay = months[startDate.getMonth()] + ' ' + startDate.getDate();
    dayHtml = `<div class="title" id="stud-day">${decentDay}</div>`;
    dayStud = document.querySelector('#add-student');
    dayStud.insertAdjacentHTML('beforeend', dayHtml);
    nextDate = startDate.setDate(startDate.getDate() + 1);
    console.log(nextDate, )
    
    
}


function addEvents() {
    addSt.addEventListener('click', addStudent);
    addBtn.addEventListener('click', addDay);
    
}

addEvents();
addDay();







