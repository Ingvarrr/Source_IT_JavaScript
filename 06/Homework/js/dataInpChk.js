function dataInpChk(){
	do{
	var x = parseInt(prompt('Input number of the required Task (1-5)'));
	}while (x<1 || x>5 || isNaN(x));
	return x;
}