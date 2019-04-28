let remove = document.querySelector("#remDay");
let add = document.querySelector("#addDay");
let update = document.querySelector("#update");
let struct = document.querySelector(".dayGraphN");
let visible = struct.innerHTML.replace("dayGraphN","dayGraph");
let addStud = document.querySelector('#addStudent');


let student = {
    name: ``,
    days: 0,
    average: 0,
    missed: 0,
    daysStr: [],
    scores: []
    
}

let averages = {
    Davitiani: [],
    Chagua: [],
    Abzianidze: [],
    Nodadze: [],
    Tchkoidze: [],
    Grigalashvili: [],
    Badashvili: [],
    Gogoladze: [],
    Kiknadze: [],
}
// console.log(student.name)

let studDayHtml = `<div class="stud-days">
<div class = "eachDays">April 30</div>

</div>`;

 let studScore = `<div class = "dayScore">0</div>`


let studDay = `<div class="stud-days"> 
<div id = "day" >0</div>
<div class='student-score' onclick="addScore()" id="Davitiani">0</div>
<div class='student-score' onclick="addScore()" id="Chagua">0</div>
<div class='student-score' onclick="addScore()" id="Abzianidze">0</div>
<div class='student-score' onclick="addScore()" id="Nodadze">0</div>
<div class='student-score' onclick="addScore()" id="Tchkoidze">0</div>
<div class='student-score' onclick="addScore()" id="Grigalashvili">0</div>
<div class='student-score' onclick="addScore()" id="Badashvili">0</div>
<div class='student-score' onclick="addScore()" id="Gogoladze">0</div>
<div class='student-score' onclick="addScore()" id="Kiknadze">0</div>
 </div>`

 let isMissed = false;
 
 
 
 const addDay = function() {
     
     document.querySelector('.container').insertAdjacentHTML('beforeend', studDay)
     let studentElements = document.querySelectorAll('.student-score')
     const day = document.querySelector('#day')
     
     
         student.daysStr.push(day)
            console.log(student.daysStr.length)
            totDays()
            missed()
            setDate()
        }
        
        const removeDay = function () {
            let stDays = document.querySelectorAll('.stud-days')
            if (stDays.length > 0) {
                document.querySelector('.stud-days').remove()
                isMissed = false
            }
            
            student.daysStr.pop()
            console.log(student.daysStr)
            totDays()
            missed()
            addAvg()
            totalAvg()
              
              
        }
        
        const totDays = function () {
            let daysLength = document.querySelector('#tot')
            daysLength.textContent = student.daysStr.length
            console.log(student.daysStr.length)
            

        }
        
        const addScore = function () {
            
            let dayScore = prompt('please enter the score below 5', '')
            if (isNaN(dayScore) || dayScore == '') {
                dayScore = prompt('Please enter The number!', '')
        } else if (dayScore > 5) {
            dayScore = 5
        } 
        console.log(dayScore)
        
        console.log(student.scores)
        event.target.textContent = dayScore
        if (dayScore == 0) {
            event.target.style.backgroundColor = "red";
            isMissed = true

        } else if (dayScore > 0) {
            event.target.style.backgroundColor = "#018a7d"
            isMissed = false
        }
        console.log(event.target.id)

       
    
        
        // student.scores.push(`${event.target.id}: ${dayScore}`)
        console.log(student.scores)
        console.log(averages)
        
        missed()
        getId()
        addToArr(event.target.id, dayScore)
        totalAvg()
        
    }

const missed = function () {
    missedOvr = document.getElementById('missedless')
    if (isMissed) {
        student.missed ++
        missedOvr.textContent = student.missed
        
    } else if(student.daysStr.length === 0) {
        missedOvr.textContent = 0
    }

    
    console.log(student.daysStr.length)
}

const getId = function() {
    let scores = document.querySelectorAll('.student-score')
    
    for (let i = 0; i < averages.length; i++){
        if(averages[i] == scores[i]) {
          studId = document.getElementById(`${scores[i]}`)
           return console.log(studId)
        }
    }
}

const addToArr = function (id, score) {
    
    

    if(id !== undefined){
        averages[id].push(score);
    }
    console.log(averages[id], score)
    console.log(averages)
    addAvg(id)
   
}

const addAvg = function(id) {
    let graph = document.getElementById(`${id}`)
    let sum = 0;
    if(id!== undefined){

        for(let i = 0; i < averages[id].length; i++){
            let el1 =  averages[id][i]
            sum += parseInt(el1, 10)
            
        }
        let avg = sum / averages[id].length
        graph.textContent = avg.toFixed(2)
        // console.log(averages[id], sum, avg)
    } 
    
}

const totalAvg = function () {
    let stud = document.querySelectorAll('.student-avg')
    let avMar = document.getElementById('av-mar')
    let sum = 0;
    
    stud.forEach(function (el) {
        sum += parseInt(el.textContent, 10) 
        avg = sum/9
        
        
    })
    avMar.textContent = avg.toFixed(2)
    console.log(parseInt(avg, 10))

    
}

const setDate = function () {
    let days = document.querySelectorAll('#day')
    const date = new Date('April 28, 2018')
    
    
    
    for (let i = 0; i < days.length; i++) {
        
        
        date.setDate(date.getDate() + 2)
        
        days[i].textContent = `${date.toDateString()}`
    }
    
    
    
}




let setupEvents = function() {
    add.addEventListener('click', addDay)
    remove.addEventListener('click', removeDay)
    
    }


setupEvents()
addToArr()
totDays()
missed()
getId()
totalAvg()
setDate()
