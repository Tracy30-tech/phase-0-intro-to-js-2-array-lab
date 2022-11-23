// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
 function destructivelyPrependCat(name){
     cats.unshift(name)
 }
 function destructivelyRemoveLastCat(){
    cats.pop()
 }
 function destructivelyRemoveFirstCat (){
    cats.shift()
 }
 function appendCat(name){
    let fit = [...cats]
    fit.push(name)
    return fit
}
function prependCat(name){
    let law = [...cats]
    law.unshift(name)
    return law
}
function removeLastCat(){
     let remove = [...cats]
     remove.pop()
     return remove
}   
function removeFirstCat(){
    let can = [...cats]
    can.shift()
    return can
}

