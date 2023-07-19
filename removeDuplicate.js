function removeDuplicate(arr) {
    
    let pro = []
    
    arr.forEach(function(elt){
        if(pro.includes(elt) == false){
            pro.push(elt)
        }
    })
    
    return pro
}