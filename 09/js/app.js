var arrNum = [1, 2, 3, 4, 3, 2, 1, 4, 3, 22];
/**
 *
 * @param val - искомое значение
 * @param array - массив в котором ищем
 */
function inArray(val, array) {
    var len = array.length;

    for(var i = 0; i < len; i++){
        if(array[i] == val){
            return true;
        }
    }

    return false;
}

function uniqueArray(array) {
    var len = array.length;
    var newArray = [];

    for (var i = 0; i < len; i++){
        if(i === 0){
            newArray.push(array[i]);
        }else{
            if(!inArray(array[i], newArray)){
                newArray.push(array[i]);
            }
        }
    }

    return newArray;
}

var arrUnique = uniqueArray(arrNum);

/*console.log(arrNum);
console.log('-----------------------');
console.log(arrUnique);*/


var arrInput = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(array) {
    var len = array.length;
    var newArray = [];

    for(var i = len - 1; i > 0; i -= 2){
        newArray.push(array[i - 1]);
        newArray.push(array[i]);
    }

    return newArray;
}

var arRes = reverseArray(arrInput);

/*
console.log('------------------');
console.log(arRes);*/

/*
var str = 'Lorem sit ipsum 34 dolor sit78 amet, consectetur sit adipisicing elit. Iste, provident.';
var num = str.match(/[a-zA-Z0-9]+/g);
//str = str.replace(/[0-9]/g, '');
console.log(num.length);
console.log(num);
var arrStr = str.split(' ');
*/

//console.log(arrStr);

function inputNumArray() {
    var array = [];

    do{
        var item = prompt('input Item');
        if(item.toLowerCase() === 'n'){
            break;
        }

        var num = parseFloat(item);
        if(!isNaN(num)){
            array.push(num);
        }else{
            alert('Input number Error!!!');
        }
    }while (true);

    return array;
}

//var arrN = inputNumArray();

console.log(arrN);

