// User and Posts Fetch with Promise Chaining
// Write a function that:
// ● Fetchesuserdatafromhttps://dummyjson.com/users/1.
// ● Usesthefetcheduser’sidtofetchtheirpostsfrom
// https://dummyjson.com/users/1/posts.
// ● Logstheuser'sfirstNameandthetitlesoftheirposts.
// ● UsePromisechainingtoimplementthis.

fetch('https://dummyjson.com/users/1')
    .then(response => response.json()) 
    .then(user => {
        console.log(`User's First Name: ${user.firstName}`); 

        return fetch(`https://dummyjson.com/users/${user.id}/posts`);
    })
    .then(response => response.json()) 
    .then(postsData => {
        console.log('Titles of Posts:');
        postsData.posts.forEach(post => {
            console.log(`- ${post.title}`); 
        });
    })
    .catch(error => {
        console.error('An error occurred:', error); 
    });
