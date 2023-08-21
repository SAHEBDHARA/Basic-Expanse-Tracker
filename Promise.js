function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating post creation with a delay of 1 second
      setTimeout(() => {
        const newPost = { id: Date.now(), content: post };
        resolve(newPost);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
      // Simulating last user activity update with a delay of 1 second
      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulating post deletion with a delay of 1 second
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  // Simulating user interactions
  function simulateUserInteractions() {
    const userId = 1;
  
    // Creating a new post
    createPost("This is a new post.")
      .then(newPost => {
        console.log("Post created:", newPost);
  
        // Updating user's last activity time
        return updateLastUserActivityTime(userId);
      })
      .then(lastActivityTime => {
        console.log("Last activity time updated:", lastActivityTime);
  
        // Deleting the last post
        return deletePost(/* provide the postId here */);
      })
      .then(() => {
        console.log("Post deleted successfully.");
  
        // Fetch and log the user's new set of posts
        console.log("User's new set of posts:", /* fetch and log posts here */);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  
  // Call the function to simulate user interactions
  simulateUserInteractions();
  
