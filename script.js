let commentCount = 0;

function updateCharacterCount() {
  const textarea = document.getElementById("commentInput");
  const charCount = document.getElementById("charCount");
  const maxChars = 200;
  const remainingChars = maxChars - textarea.value.length;
  charCount.textContent = `${remainingChars} characters remaining`;
}

// SEARCH FUNCTIONALITY
function searchBlogs() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const blogContainers = document.querySelectorAll(".blog-container");

  blogContainers.forEach((container) => {
    const blogTitle = container.querySelector(".blog-title");
    console.log(blogTitle);
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

function redirectToBlog(slug) {
  const blogContainer = document.querySelector(
    `.blog-container[data-slug="${slug}"]`
  );
  if (blogContainer) {
    // Get the content from the elements
    const tag = blogContainer.querySelector(".blog-tag").textContent;
    const title = blogContainer.querySelector(".blog-title").textContent;
    const imgSrc = blogContainer.querySelector("img").src;
    const content = blogContainer.querySelector(".blog-content").textContent;
    // Encode the data to safely pass in the URL
    const url = `./blog.html?tag=${encodeURIComponent(
      tag
    )}&title=${encodeURIComponent(title)}&imgSrc=${encodeURIComponent(
      imgSrc
    )}&content=${encodeURIComponent(content)}`;

    // Redirect to the new page with URL parameters
    window.location.href = url;
  }
}

window.onload = function () {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get('tag');
  const title = urlParams.get('title');
  const imgSrc = urlParams.get('imgSrc');
  const content = urlParams.get('content');

  // Ensure elements are present before modifying their content
  const blogTitle = document.querySelector(".blogTitle");
  const blogTag = document.querySelector(".blogtag");
  const featuredImage = document.querySelector(".featured-image");
  const blogContent = document.querySelector(".blogContent");

  if (blogTitle && blogTag && featuredImage && blogContent) {
      blogTitle.textContent = title;
      blogTag.textContent = tag;
      featuredImage.src = imgSrc;
      blogContent.textContent = content;
  } else {
      console.error('One or more elements not found.');
  }
};
