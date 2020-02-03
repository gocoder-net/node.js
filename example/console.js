// 1. console.log 사용법

var a = 'test';
console.log(a)
console.log('node','js') 

// 2. console.info, warn, error 사용법

console.log("Log 출력");    
console.info("Info 출력");      
console.warn("Warn 출력");      
console.error("Error 출력");

// 3. console.time 사용법

console.time('time'); 
for(var i = 1; i <= 100000; i++){} 
console.timeEnd('time');
