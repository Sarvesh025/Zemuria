const content = document.getElementById('content');
const loading = document.getElementById('loading');

let page = 1;

let isLoading = false;

const data = [
 {title:'Item-1', body:'Body-1'},
  {title:'Item-2', body:'Body-2'},
  {title:'Item-3', body:'Body-3'},
  {title:'Item-4', body:'Body-4'},
  {title:'Item-5', body:'Body-5'},
];

function fetchData(page){
  loading.style.display = 'block';
  isLoading = true;
  
  setTimeout(()=>{
    displayData(data);
    loading.style.display = 'none';
    isLoading = false;
  },1000);
}

function displayData(data){
  data.forEach(item =>{
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    content.appendChild(div);
  });
}

window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 & !isLoading){
    page++;
    fetchData(page);
  }
});

fetchData(page);