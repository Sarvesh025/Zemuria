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
  {title:'Item-6', body:'Body-6'},
  {title:'Item-7', body:'Body-7'},
  {title:'Item-8', body:'Body-8'},
  {title:'Item-9', body:'Body-9'},
  {title:'Item-10', body:'Body-10'},
  {title:'Item-11', body:'Body-11'},
  {title:'Item-12', body:'Body-12'},
  {title:'Item-13', body:'Body-13'},
  {title:'Item-14', body:'Body-14'},
  {title:'Item-15', body:'Body-15'},
  {title:'Item-16', body:'Body-16'},
  {title:'Item-17', body:'Body-17'},
  {title:'Item-18', body:'Body-18'},
  {title:'Item-19', body:'Body-19'},
  {title:'Item-20', body:'Body-20'},
  {title:'Item-21', body:'Body-21'},
  {title:'Item-22', body:'Body-22'},
  {title:'Item-23', body:'Body-23'},
  {title:'Item-24', body:'Body-24'},
  {title:'Item-25', body:'Body-25'},
  {title:'Item-26', body:'Body-26'},
  {title:'Item-27', body:'Body-27'},
  {title:'Item-28', body:'Body-28'},
  {title:'Item-29', body:'Body-29'},
  {title:'Item-30', body:'Body-30'},
  {title:'Item-31', body:'Body-31'},
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