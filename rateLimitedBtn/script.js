function rateLimit(fn, timeout){
    let lastCallTime = 0;
    let isPending = false;
    
    return function(...args){
      const now = Date.now();
      
      if(isPending){
        alert(`wait for ${timeout} milliseconds`);
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
        const remainingTime = timeout - (now - lastExecuted);
        document.getElementById('rateLimitButton').setAttribute('disabled', '');
                  document.getElementById('message').innerText = `Please wait ${remainingTime} milliseconds.`;
                  setTimeout(() => { document.getElementById('rateLimitButton').removeAttribute('disabled'); 
                  document.getElementById('message').innerText = `ready`;
                  }, timeout)
      }
    };
  }
  
  const compute = ()=>{
    document.getElementById('message').innerText = `Function executed at: ${new Date().toLocaleTimeString()}`;
  };
  
  const rateLimitedFunc = rateLimit(compute, 2000);
  
  document.getElementById('rateLimitButton').addEventListener('click', rateLimitedFunc);
  setTimeout(()=>{
      rateLimitedFunc(); // allowed after 2 seconds.
    }, 2001);