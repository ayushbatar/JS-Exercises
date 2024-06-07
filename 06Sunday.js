for(i = 2024; i <= 2050; i++){
    let date =`01/01/${i}`
    let today = new Date(i,0,1)
    let day = today.getDay()
    if(day === 0){
        console.log(`1st January is being a Sunday ${i}`);
    }
}