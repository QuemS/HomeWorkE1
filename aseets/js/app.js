const url ='https://fakestoreapi.com/products';

let request = new Promise((resolve,reject) =>{
    fetch(url)
    .then(data => data.json().then(item =>resolve(item)))
    .then(error => reject(error));
});

function showTag(item) {
    let tagApps = document.querySelector('.apps');
    let tag = document.createElement('div');
    tag.innerHTML = `
    <div class="tag card my-2 d-flex  column justify-content-center " >
      <div class='imgStyle '>
        <img src="${item.image}" class="p-3 card-img-top  text-center" alt="...">
      </div>
      <div class="card-body ">
        <h5 class="text-center">${item.title}</h5>
        <p class='text-center '>${item.description}</p>
      </div> 
      <div class="pe-4">
        <h5 class='price text-end '>$ ${item.price}</h5>
      </div>
    </div>
`
  return tagApps.insertAdjacentElement('afterbegin',tag);
}

function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i].price > arr[i + 1].price) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

request.then( arrItem => arrItem.map( item =>{
  showTag(item);
  console.log(item);
}));

sortDescending.addEventListener('click', () => {
  let deleteTag = document.querySelector('.apps');
  deleteTag.innerHTML = null;
  return request.then(arrItem => bubbleSort(arrItem).map(price => showTag(price)) );
});

sortAscending.addEventListener('click', () => {
  let deleteTag = document.querySelector('.apps');
  deleteTag.innerHTML = null;
  return request.then(arrItem => bubbleSort(arrItem).reverse().map(price => showTag(price)) );
});
