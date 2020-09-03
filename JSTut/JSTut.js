// Pi = 4/1 - 4/3 + 4/5 - 4/7 ...

function calcPI(iterations) {
    //const piVal = 3.14159;

    let pi = 0, divisor = 1;
    for(i = 0; i <= iterations; i++) {
        pi = pi + (4/divisor) - (4/(divisor + 2));
        divisor += 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}