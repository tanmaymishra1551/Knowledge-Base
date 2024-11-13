// SEARCH FUNCTIONALITY
function searchBlogs() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const blogContainers = document.querySelectorAll(".blog-container");

  blogContainers.forEach((container) => {
    const blogTitle = container.querySelector(".blog-title");
    console.log(blogTitle)
    if (blogTitle) {
      const text = blogTitle.textContent.toLowerCase();
      if (text.includes(input)) {
        container.classList.remove("hidden");
      } else {
        container.classList.add("hidden");
      }
    }
  });
}
