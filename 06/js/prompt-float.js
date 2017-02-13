function promptFloat(message, min, max) {
    min = min || 0;
    max = max || 100;
    var res;
    do{
        res = parseFloat(prompt(message));
    }while (isNaN(res) || res >= max || res <= min);

    return res;
}
