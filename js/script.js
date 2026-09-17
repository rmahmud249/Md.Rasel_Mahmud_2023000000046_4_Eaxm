
const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const postsContainer = document.getElementById("posts-container");
    async function fetchPosts() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const posts = await response.json();
            posts.slice(0, 8).forEach(renderPost);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
            postsContainer.innerHTML = `
                <p class="error-message">
                    Failed to load posts. Please try again later.
                </p>
            `;
        }
    }
    function renderPost(post) {
        const card = document.createElement("article");
        card.className = "post-card";
        card.dataset.postId = post.id;
        card.innerHTML = `
            <div>
                <h2>${escapeHtml(post.title)}</h2>
                <p>${escapeHtml(post.body)}</p>
            </div>
            <button class="delete-btn" type="button">
                Delete Post
            </button>
        `;
        const deleteButton = card.querySelector(".delete-btn");
        deleteButton.addEventListener("click", async () => {
            deleteButton.disabled = true;
            deleteButton.textContent = "Deleting...";

            try {
                const response = await fetch(`${API_URL}/${post.id}`, {
                    method: "DELETE"
                });

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                card.remove();
            } catch (error) {
                console.error("Failed to delete post:", error);

                deleteButton.disabled = false;
                deleteButton.textContent = "Delete Post";
                alert("Failed to delete the post. Please try again.");
            }
        });
        postsContainer.appendChild(card);
    }
    function escapeHtml(value) {
        const div = document.createElement("div");
        div.textContent = value;
        return div.innerHTML;
    }
    fetchPosts();
