// 블로그 포스트를 동적으로 추가하는 코드 예시
document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = [
        {
            title: "첫 번째 포스트",
            content: "이것은 첫 번째 블로그 포스트입니다. 환영합니다!"
        },
        {
            title: "두 번째 포스트",
            content: "이곳은 두 번째 포스트입니다. 글을 통해 생각을 공유하세요!"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        blogPostsContainer.appendChild(postElement);
    });
});

// 연락처 폼 제출 이벤트 처리
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`이름: ${name}, 이메일: ${email}, 메시지: ${message}`);

    alert('메시지가 전송되었습니다!');
});
