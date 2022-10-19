function Fat(num) {
    let fat = 1
    for(let c = num; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(Fat(5))