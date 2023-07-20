function phoneNumberValidator(str) {
    if(str.length == 10 && str.includes("-") == false && str.includes(" ") == false){
        return true
    }
    
    else if(str.length == 12){
        if(str.includes("-")){
            let arr = str.split("-")
            return arr[0].length==3 && arr[1].length==3 && arr[2].length==4
            
        }
        else if (str.includes(" ")){
            let arr = str.split(" ")
            return arr[0].length == 3 && arr[1].length == 3 && arr[1].length == 4
        }
        
        else{
            return false
        }
        
    }
    
    else{
        return false
    }
}