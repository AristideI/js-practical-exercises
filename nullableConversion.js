function convertNullableValues(obj){
    for(key in obj){
        if(obj[key] === undefined){
            obj[key] = ""
        }
        
        else if(obj[key] === null){
            obj[key] = 0
        }
    }
    
    return obj
}