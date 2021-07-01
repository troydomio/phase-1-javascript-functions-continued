// Your code here
function saturdayFun(activity, noEntry="roller-skate"){
    if(activity){return `This Saturday, I want to ${activity}!`} return `This Saturday, I want to ${noEntry}!`}
    console.log();

function mondayWork(activity1, activity2 = "go to the office"){
    if(activity1){return `This Monday, I will ${activity1}.`;} return `This Monday, I will ${activity2}.`
}

function wrapAdjective(flair="*"){
         let ok= function(adj){
         return`You are ${flair}${adj}${flair}!`
    }
    return ok;
}


 console.log(wrapAdjective('*')('smart'))

