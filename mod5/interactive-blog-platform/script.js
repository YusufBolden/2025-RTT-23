let posts = [];
let editingId = null;

const LOCAL_KEY = "blog_posts";

const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const postIdField = document.getElementById("postIdField");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");
const postsContainer = document.getElementById("postsContainer");

function loadPosts() {
  const data = localStorage.getItem(LOCAL_KEY);
  posts = data ? JSON.parse(data) : [];
}

function savePosts() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(posts));
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function resetForm() {
  editingId = null;
  postForm.reset();
  postIdField.value = "";
  submitBtn.textContent = "Publish";
  cancelEditBtn.classList.add("hidden");
  titleError.classList.add("hidden");
  contentError.classList.add("hidden");
}

function renderPosts() {
  if (!posts.length) {
    postsContainer.innerHTML = `<p class="text-center text-slate-500">No posts yet — start writing!</p>`;
    return;
  }

  postsContainer.innerHTML = posts
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(
      (p) => `
<article class="bg-white shadow rounded-lg p-6" data-id="${p.id}">
  <header class="flex justify-between items-start mb-2">
    <h2 class="text-xl font-semibold break-words">${escapeHTML(p.title)}</h2>
    <span class="text-xs text-slate-500">${new Date(
      p.timestamp
    ).toLocaleString()}</span>
  </header>
  <p class="whitespace-pre-wrap break-words mb-4">${escapeHTML(p.content)}</p>
  <div class="flex gap-3">
    <button class="editBtn bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Edit</button>
    <button class="deleteBtn bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">Delete</button>
  </div>
</article>
`
    )
    .join("");
}

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  let valid = true;

  if (!title) {
    titleError.classList.remove("hidden");
    valid = false;
  } else {
    titleError.classList.add("hidden");
  }

  if (!content) {
    contentError.classList.remove("hidden");
    valid = false;
  } else {
    contentError.classList.add("hidden");
  }

  if (!valid) return;

  if (editingId) {
    // Update
    posts = posts.map((p) =>
      p.id === editingId ? { ...p, title, content } : p
    );
  } else {
    // New
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      timestamp: Date.now(),
    };
    posts.push(newPost);
  }

  savePosts();
  renderPosts();
  resetForm();
});

cancelEditBtn.addEventListener("click", resetForm);

postsContainer.addEventListener("click", (e) => {
  const article = e.target.closest("article[data-id]");
  if (!article) return;
  const targetId = article.dataset.id;

  if (e.target.classList.contains("editBtn")) {
    const post = posts.find((p) => p.id === targetId);
    if (!post) return;

    editingId = post.id;
    titleInput.value = post.title;
    contentInput.value = post.content;
    submitBtn.textContent = "Update";
    cancelEditBtn.classList.remove("hidden");
    titleError.classList.add("hidden");
    contentError.classList.add("hidden");
    titleInput.focus();
  }

  if (e.target.classList.contains("deleteBtn")) {
    posts = posts.filter((p) => p.id !== targetId);
    savePosts();
    renderPosts();
    if (editingId === targetId) resetForm();
  }
});

// Initializers
loadPosts();
renderPosts();
