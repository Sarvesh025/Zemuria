function showToast(type, message){
    const toast = document.getElementById('toast');
    const toastMsg = document.createElement('div');
    toastMsg.className = `toast ${type} show`;
    toastMsg.textContent = message;
    
    toast.appendChild(toastMsg);
    
    setTimeout(()=>{
    toastMsg.classList.remove('show');
      setTimeout(()=>{
      toast.removeChild(toastMsg);
      }, 200);
    }, 2000);
  }