function factorial(n) {
    partial = [1,1]
    if(n === 0) return 1;
    else {
        while(partial.length <= n){
            partial.push(partial.length * partial[partial.length - 1])
        }
    }
    return partial;
}

function e(n) {
    result = 0
    fact = factorial(n)
    if(n === 0) return 1;
    else {
        for (let index = 0; index < fact.length; index++) {
            result += (1/ fact[index])
        }
    }
    return result
}

