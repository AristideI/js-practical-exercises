function reverseInPlace(str) {
    let pro = str.split(" ")
    let arr = []
    
    for(let i = 0; i < pro.length; i++){
        let rev = []
        for(let o = pro[i].length - 1; o >= 0; o--){
            rev.push(pro[i][o])
        }
        
        arr.push(rev.join(""))
    }
    
    return arr.join(" ")
}
