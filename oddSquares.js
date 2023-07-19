function oddSquare(arr){
    let pro = []
    arr.forEach(function(elt) {
        if(elt%2 != 0){
            pro.push(elt**2)
        }
    })
    
    return pro
}