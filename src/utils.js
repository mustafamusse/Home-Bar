
function existsInArray(arrToSearch, item) {
    function isSame(obs) {
        if (obs.id === item.id)
            return true;
    }
    var arr = arrToSearch.filter(isSame)
    if (arr.length > 0) return true
    else return false
}

export {existsInArray}