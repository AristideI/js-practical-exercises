function addNumbers(str) {
    let pro = str.split("")
    if(pro.includes("/")){
        let k = Number(pro[pro.indexOf("/") - 1]) / Number(pro[pro.indexOf("/") + 1])
        pro.splice(pro.indexOf("/") - 1, 3, k)
      
    }
    if(pro.includes("*")){
        let k = Number(pro[pro.indexOf("*") - 1]) * Number(pro[pro.indexOf("*") + 1])
        pro.splice(pro.indexOf("*") - 1, 3, k)
       
    }
    if(pro.includes("+")){
        let k = Number(pro[pro.indexOf("+") - 1]) + Number(pro[pro.indexOf("+") + 1])
        pro.splice(pro.indexOf("+") - 1, 3, k)
       
    }
    if(pro.includes("-")){
        let k = Number(pro[pro.indexOf("-") - 1]) - Number(pro[pro.indexOf("-") + 1])
        pro.splice(pro.indexOf("-") - 1, 3, k)
        
    }

    return Number(pro.join(""))
}

console.log(addNumbers("3+5*3/3"))