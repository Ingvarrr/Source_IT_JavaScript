function task1(){
	var c = prompt('Для операции умножения чисел введите - 1, вычитания - 2, суммы - 3'); // задаем желаемую операцию 
	var a = prompt('Введите первое число');
	var b = prompt('Введите второе число');
	var z = 0;

if (c == 1)
{
	z = a * b
}
else
{
		if (c == 2)
	{
		z = a - b
	} 
	else
	{
		z = + a + + b	
	};
};
	alert('Результат = ' + z); // вывод результата на экран
}

function task2(){
	var x1=0, y1=0, x2=-2, y2=-2, r=1;
	var a=prompt('Введите координату точки по оси х');
	var b=prompt('Введите координату точки по оси y');
	var r1=Math.sqrt(Math.abs(Math.pow((a-x1),2) + Math.pow((b-y1),2))); //расчет отрезка от начала координат до точки
	var s0=Math.abs(0.5*((x2-x1)*(y1-y2)-(x1-x1)*(y2-y2))); //расчет площади существующего треугольника
	var s1=Math.abs(0.5*((x1-a)*(y1-b)-(x1-a)*(y2-b)));
	var s2=Math.abs(0.5*((x1-a)*(y2-b)-(x1-a)*(y1-b)));
	var s3=Math.abs(0.5*((x1-a)*(y1-b)-(x1-a)*(y1-b)));
	var s= + s1 + + s2 + + s3;//cумма площадей треугольников с вершиной с введеными выше координатами

	if (r1<=r || Math.abs(s0-s)<0.1){ //входит ли точнка в окружность или треугольник, из-за округления чисел площадь именно так записал, чтобы правильно считало
		alert ('Точка лежит в заштрихованной области')
	}
	else{
		alert ('Точка не лежит в заштрихованной области')
	};
}

function task3(){
	var n=prompt('Введите число N');
	var i=1;
	while (i<=n){
		if (i%3===0){
		console.log(i);
		}
		i++;
	}
	var sum=0, i=1;
	while (i<=n){
		sum+=i;
		i++;
	}
	alert ('Сумма чисел от 1 до N = ' + sum);
	var mul=1, i=1;
	while (i<=n){
		if(i%2===0){
		mul*=i;
				}
		i++;
	}
	alert ('Произвезведение всех четных чисел до N = ' + sum);
}

function task4(){
	for (var a=35,b=87,c=a; c<=b; c++){
		if (c%7===1 || c%7===2 || c%7===5){
			console.log(c)
		}
	}
}

function task5(){
	var n = parseInt(prompt('input N'));
	var x=n%10;
	switch (x){
		case 1:
		console.log('У Пети ' + n + ' яблоко');
		break;
		case 2: 
		case 3:
		case 4:
		console.log('У Пети ' + n + ' яблокa');
		break;
		case 2:
		case 6: 
		case 7:
		case 8:
		case 9:
		console.log('У Пети ' + n + ' яблокa');
		break;
		case 0: 
		case 5:
		console.log('У Пети ' + n + ' яблок');
		break;
	}
}