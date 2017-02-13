var arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var len = arrNumb.length;
/*console.log(len);
console.log(arrNumb);*/

//printArray(arrNumb);

arrNumb[len] = 345;

arrNumb.push(23);
arrNumb.push(12);
arrNumb.push(56);

//printArray(arrNumb);

function genArr(len) {
    var array = [];
    for (var i = 0; i < len; i++){
        if((i + 1)%2 === 0) {
            array.push(i + 1);
        }
    }
    return array;
}

var n = promptFloat('Input len');

var arr = genArr(n);

//printArray(arr);

function sumArray(array) {
    var len = array.length;
    var sum = 0;

    for(var i = 0; i < len; i++){
        sum += array[i];
    }
    return sum;
}

//console.log(sumArray(arr));

function progres(len) {
    var array = [];

    for(var i = 0; i < len; i++){
        if(i <= 1){
            array.push(1);
        }else{
            var a = array[ i - 2 ] + array[ i - 1];
            array.push(a);
        }
    }
    return array;
}

//printArray(progres(n));

function replaceArray(array) {
    var len = array.length;
    var resArray = [];
    for (var i = 1; i < len; i += 2){
        resArray.push(array[i]);
    }
    return resArray;
}

var testArray = genArr(n);

//printArray(testArray);

testArray = replaceArray(testArray);
//console.log('--------------------------');
//printArray(testArray);

var matcrix = [[1,2,3],[1,2,3], [1,2,3]];//пример матриц
//consol.log(matcrix[0][0]);

function rand() {
    return Math.floor(Math.random() * 100  - Math.random() * 100);
}
for(var i = 0; i <= 10; i++){
    console.log(rand());
}
function genMatrix(n) {
    var matrix = [];
    for (var row = 0; row < n; row++){
        matrix[row] = [];
        for (var cell = 0; cell < n; cell++){
            matrix[row][cell] = row + cell;
        }
    }
    return matrix;
}

var matr = genMatrix(n);

//printSquareMatrix(matr);