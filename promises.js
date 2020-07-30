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


createPost({title: 'post 3', body: 'this post three'})
.then(getPosts)
    .catch(err => console.log(err));