function printSquareMatrix(matrix) {
    var len = matrix.length;

    for (var row = 0; row < len; row++){
        var strRow = '';
        for (var cell = 0; cell < len; cell++){
            strRow += matrix[row][cell] + " ";
        }
        console.log(strRow.trim());
    }
}