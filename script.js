// Global variables
let currentUser = null;
let blogPosts = [];
let darkMode = false;

// DOM Elements
const blogPostsContainer = document.getElementById('blog-posts');
const loginBtn = document.getElementById('login-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');
//login button and register button


// Event Listeners
if (loginBtn) loginBtn.addEventListener('click', () => alert('Login functionality to be implemented'));

if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);

// Functions
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    darkModeToggle.textContent = darkMode ? '☀️' : '🌙';
}

function renderBlogPosts() {
    if (!blogPostsContainer) return;
    
    blogPostsContainer.innerHTML = '';
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <div class="metadata">
                <span>By ${post.author}</span>
                <span>${post.date}</span>
                <span>Category: ${post.category}</span>
            </div>
            <div>${post.content}</div>
            <div class="tags">
                ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

function init() {
    // Add some initial blog posts
    blogPosts = [
        {
            title: "Welcome to Story Zone",
            content: "This is our first blog post on Story Zone. We're excited to bring you AI-powered blogging with advanced formatting and niche blog categories!",
            author: "Admin",
            date: new Date().toLocaleDateString(),
            category: "tech",
            tags: ["welcome", "AI", "blogging"]
        },
        {
            title: "5 Must-Visit Destinations for 2024",
            content: "1. Bali, Indonesia\n2. Santorini, Greece\n3. Tokyo, Japan\n4. Machu Picchu, Peru\n5. Iceland",
            author: "Travel Enthusiast",
            date: new Date().toLocaleDateString(),
            category: "travel",
            tags: ["travel", "destinations", "2024"]
        }
    ];

    renderBlogPosts();
}

init();