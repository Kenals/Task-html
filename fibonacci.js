let fib = function(input, output) {
let a = input[0],
    b = input[1],
    next,
    cnt =  2;
    
    while (cnt < output) {
next = a + b;
a = b;
b = next;
input.push(next);
cnt++;
}
return input;
}
fib([0, 1], 20);


