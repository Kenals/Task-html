let fib = function(output) {
    let input = [];
     let a = 0;
     let  b = 1;
     let next = a+b;
     input.push(a,b);
         index =  2;
           
     while (index <output) {
       next = a + b;
       a = b;
       b = next;
       input.push(next);
       index++;
 }   
  return input;
 }
   fib(20);
       