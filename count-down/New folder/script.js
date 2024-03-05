const enddate  = '01 january 2024 12:00 AM'
document.getElementById('enddate').innerText = enddate;
const inputs = document.querySelectorAll('input')

function clock(){
    const end =  new Date(enddate)
    // console.log(end);
    
    const now =  new Date();
    // console.log(now);

    // const diff = end-now;  // in miliseconds
    const diff = (end-now)/1000; // in seconds
    // console.log(diff)
   // Check if the countdown has reached zero or is negative
   if (diff <= 0) {
    // Perform action when the end date is reached
    document.getElementById('enddate').innerText = '🎉 Happy New Year! 🎉';
    // Trigger fireworks or any other action
    // Example: triggerFireworks();
    return; // Exit the function if the end date is reached
}



    let days = Math.floor(diff/24/60/60);
    let hours = Math.floor((diff/60/60)%24);
    let minutes = Math.floor((diff/60)%60);
    let seconds = Math.floor(diff%60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;




    // covnert into days
}
clock();



// 1 day = 24hrs
// 1 hr = 60minutes
// 60 min =  3600sec 
// setInterval(
//     () =>{
//         clock()
//     },
//     1000
// )

setInterval(function(){
    clock();
},1000);


