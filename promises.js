const posts = [
    {title: 'post 1', body: 'this post one'},
    {title: 'post 2', body: 'this post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err){
                resolve();
            } else {
                reject('error: sthg went wrong');
            }
        }, 2000);
    })
}

/////////////////// single promise
// createPost({title: 'post 3', body: 'this post three'})
// .then(getPosts)
//     .catch(err => console.log(err));


/////////////////// group of promises
// Promise.all

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Good bye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(
//     (values) => console.log(values)
// );


/////////////////// Async await
// async function init(){
//     await createPost({title: 'post 3', body: 'this post three'});
//     getPosts();
// }

// init();

/////////////////// Async await with fetch
async function fecthUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fecthUsers();