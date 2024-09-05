const add = (n) => (n+10);

add(9);

const memo = () =>{
  let cache = {};
  return (n)=>{
    if(n in cache){ 
      console.log('Featching from cache');
      return cache[n];
    }
    else{
      console.log('calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}

const newAdd = memo();

console.log(newAdd(6)); // calculated
console.log(newAdd(6)); // cached