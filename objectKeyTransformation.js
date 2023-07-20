function transformKeys(obj){
    for(key in obj){
        obj[key.toUpperCase()] = obj[key]
        delete obj[key]
    }

    return obj
}
