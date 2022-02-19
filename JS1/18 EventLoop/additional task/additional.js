const renderPost = async (id) => {
    const body = document.querySelector('body');
    try {
        const requestPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const responsePost = await requestPost.json();
        const requestComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const responseComments = await requestComments.json();
        const post = createPost(responsePost, responseComments);
        body.append(post);
    } catch(err) {
        console.error('error: ', err)
    }
}

const createPost = (post, comments) => {
    const mainDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const pTag = document.createElement('p');
    const bTag = document.createElement('b');
    const commentsWrapper = document.createElement('div');

    mainDiv.classList.add('post');
    mainDiv.setAttribute('id', 'post');

    h1.classList.add('post__title');
    h1.textContent = post.title;

    pTag.classList.add('post__text');
    pTag.textContent = post.body;

    bTag.classList.add('post__comments-text');
    bTag.textContent = 'Комментарии';

    comments.forEach((item) => {
        const comment = document.createElement('div');
        const emailInComment = document.createElement('span');
        const textInComment = document.createElement('span');    
        commentsWrapper.classList.add('post__comments');    
        comment.classList.add('post-comment');    
        emailInComment.classList.add('post-comment__author');
        emailInComment.textContent = item.email;
        textInComment.classList.add('post-comment__text');
        textInComment.textContent = item.body;

        comment.append(emailInComment);
        comment.append(textInComment);

        commentsWrapper.append(comment);
    })

    mainDiv.append(h1);
    mainDiv.append(pTag);
    mainDiv.append(bTag);
    mainDiv.append(commentsWrapper);

    return mainDiv;
}

renderPost(1);