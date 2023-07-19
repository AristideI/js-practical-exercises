function stringCompression(str){
    let a = {}
    let b = []
    for(let i = 0; i < str.length; i++){
        if(a.hasOwnProperty(str[i])){
            a[str[i]]++
        }
        else{
            a[str[i]] = 1
        }
    }
    
    for(letter in a){
        b.push(letter)
        b.push(a[letter])
    }
    
    return b.join("")
}