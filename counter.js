function createCounter() {
    let counter = 0
    return function counterFn(){
        counter++
    }
}


