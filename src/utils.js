
function existsInArray(arrToSearch, item) {
    function isSame(obs) {
        if (obs.idIngredient === item.idIngredient)
            return true;
    }
    var arr = arrToSearch.filter(isSame)
    if (arr.length > 0) return true
    else return false
}

function ingrToString(arr){
    return arr.map(obj => obj.strIngredient).toString().replaceAll(" ", "_")
}

export {existsInArray, ingrToString}