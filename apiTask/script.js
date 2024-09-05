async function sendRequest(payload, endPoint){
    const requests = payloads.map(payload => 
      fetch(endpoint, {
        method:'POST',
        body:JSON.styingify(payload)})
    .then(response => response.json())
  .catch(error => ({error : error.message}))
  );
    
  const result = await Promise.allSettled(requests);
  return result.map(result => result.status === 'fulfilled' ? result.value : result.reason );
    
  }
  
  
  const endPoint = 'https://6679825b18a459f63950301b.mockapi.io/sideBar/leaked_cred';
  
  const payloads = [
    {data : 'Request 1'},
  {data : 'Request 2'},
  {data : 'Request 3'},
  ];
  
  sendRequest(payloads, endPoint).then(results => {console.log('Results : ', results);
  });
  