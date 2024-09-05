function rateLimit(fn, timeout){
    let lastCallTime = 0;
    let isPending = false;
    
    return function(...args){
      const now = Date.now();
      
      if(isPending){
        alert(`wait for ${timeout} seconds`);
        return;
      }
     if(now - lastCallTime > timeout){
       fn(...args);
       lastCallTime = now;
       isPending = true;
       setTimeout(()=>{
         isPending = false;
       }, timeout);
     }
      else{
        alert(`wait for ${timeout} seconds`);
      }
    };
  }
  
  const compute = ()=>{
    console.log('start');
    setTimeout(()=>{
      console.log('finished');
    }, 25*60*1000); // 25 minutes of computation.
  };
  
  const rateLimitedFunc = rateLimit(compute, 2000);
  
  rateLimitedFunc();
  setTimeout(()=>{
      rateLimitedFunc(); // allowed after 2 seconds.
    }, 2001);