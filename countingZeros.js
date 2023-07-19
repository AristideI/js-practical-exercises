function countingZeros(min, max) {
    let items = []
    for(let i = min; i <= max; i++) {
        let a = i % 10 
        if(a === 0){
            items.push(i)
            if((i/10) % 10 === 0){
                items.push(i/10)
            }
        }
    }
    
    return items.lenght
}
