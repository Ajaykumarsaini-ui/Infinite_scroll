const container = document.querySelector(".container");

let limit = 3 ;
let pagecount = 1;
let postcount = 1 ;

const getPosts = async () =>{

    // important part 
     const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}$_pages=${pagecount}`)

     const data = await response.json();

     console.log(data);

     data.map((curElm) => {
        const htmlData = `
        <div class="posts m-5 px-5 py-2">
        <h2 class="post-id">${postcount++}</h2>
        <h3 class="title my-2">${curElm.title}</h3>
        <p class="post-info my-3 pb-3">
          ${curElm.completed}</p>
      </div>`;

    //   very important part 
container.insertAdjacentHTML('beforeend', htmlData);

     });


};

getPosts();

// for scroll bar imp part 

// client height = page height 
// offsetheight = height with scroll bar 
// scroll height = page stsrt and page end height 

 const showData = () =>{
    setTimeout(() => {
        pagecount++
        getPosts();
    }, 300);

 }

window.addEventListener('scroll', () => {

  const scrollTop =  document.documentElement;

  const clientHeight =  document.documentElement;

  const scrollHeight =  document.documentElement;

  if ( scrollTop && clientHeight >= scrollHeight) {


    showData();
}

})