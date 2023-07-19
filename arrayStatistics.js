function arrayStatistics(arr) {
    let a = {}
    a["min"] = Math.min(...arr)
    a["max"] = Math.max(...arr)
    
    let summ = arr.reduce((a,b) => a + b , 0)
    let avaragee = summ / arr.length
    
    a["sum"] = summ
    a["average"] = avaragee

    
    return a
}