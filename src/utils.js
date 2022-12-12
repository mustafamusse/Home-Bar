
function existsInArray(arrToSearch, item) {
    function isSame(obs) {
        if (obs.idIngredient === item.idIngredient)
            return true;
    }
    var arr = arrToSearch.filter(isSame)
    if (arr.length > 0) return true
    else return false
}

function ingrToString(arr) {
    return arr.map(obj => obj.strIngredient).toString()
}

function checkAllIngredientsMatch(cocktailAsArray, stringToCompareWith) {
    console.log(stringToCompareWith)
    console.log(cocktailAsArray)
    var i = 17
    var nmbrOfMisses = 0;
    while (cocktailAsArray[i]) {
        var regexpr = new RegExp(cocktailAsArray[i],"i")
        console.log(regexpr)
        if (!regexpr.test(stringToCompareWith)){
            nmbrOfMisses++
            console.log(cocktailAsArray[i])
        }
        i++
    }
    console.log(nmbrOfMisses)
    return nmbrOfMisses === 0;
}

export { existsInArray, ingrToString, checkAllIngredientsMatch }