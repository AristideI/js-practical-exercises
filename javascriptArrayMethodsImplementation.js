function myMap(arr,callBackFunc){
    let pro = []
    for(elt of arr){
        pro.push(callBackFunc(elt))
    }
    return pro  
}


function myFilter(arr,callBackFunc){
    let pro = []
    for(elt of arr){
        if(callBackFunc(elt)){
            pro.push(elt)
        }
    }
    return pro
    
}

function myReduce(arr,callBackFunc,acc=arr[0]){
    let pro = acc
        for(let i = 1; i < arr.length; i++){
            pro = callBackFunc(pro,arr[i])
            
        }
        return pro
        
    }


function myForEach(arr,callBackFunc){
    for(elt of arr){
        elt = callBackFunc(elt)
    } 
    }
    