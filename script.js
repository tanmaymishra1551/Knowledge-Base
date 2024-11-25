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
  const slugData = blogContainer.getAttribute("data-slug");
  if (blogContainer) {
    // Get the content from the elements
    const tag = blogContainer.querySelector(".blog-tag").textContent;
    const title = blogContainer.querySelector(".blog-title").textContent;
    const imgSrc = blogContainer.querySelector("img").src;
    const content = blogContainer.querySelector(".blog-content").textContent;
    // Encode the data to safely pass in the URL
    const url = `./blog.html?tag=${encodeURIComponent(
      tag
    )}&slug=${encodeURIComponent(slugData)}&title=${encodeURIComponent(
      title
    )}&imgSrc=${encodeURIComponent(imgSrc)}&content=${encodeURIComponent(
      content
    )}`;

    // Redirect to the new page with URL parameters
    window.location.href = url;
  }
}

window.onload = function () {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get("tag");
  const title = urlParams.get("title");
  const imgSrc = urlParams.get("imgSrc");
  const content = urlParams.get("content");

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
    console.error("One or more elements not found.");
  }
};

// Update the character count
function updateCharacterCount() {
  const textarea = document.getElementById("commentInput");
  const remaining = 200 - textarea.value.length;
  document.getElementById(
    "charCount"
  ).textContent = `${remaining} characters remaining`;
}

// Handle the comment submission
function submitComment(event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value.trim();
  const comment = document.getElementById("commentInput").value.trim();

  // Validate inputs
  if (!username || !comment) {
    alert("Please fill in both your name and comment.");
    return;
  }

  // Create a new comment element
  const commentList = document.getElementById("commentList");
  const newComment = document.createElement("div");
  newComment.className = "comment-item";
  newComment.innerHTML = `<strong>${username}:</strong> ${comment}`;

  // Append the comment to the list
  commentList.appendChild(newComment);

  // Update the comment count
  const commentCount = document.getElementById("commentCount");
  const currentCount = parseInt(commentCount.textContent.match(/\d+/)[0]);
  commentCount.textContent = `(${currentCount + 1})`;

  // Reset the form
  document.getElementById("username").value = "";
  document.getElementById("commentInput").value = "";
  updateCharacterCount();
}

function toggleMenu() {
  console.log("button is clicked");
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

const chatIcon = document.getElementById("chat-icon");
const chatPrompt = document.getElementById("chat-prompt");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messagesDiv = document.getElementById("messages");

// Toggle Chat Prompt
chatIcon.addEventListener("click", () => {
  chatPrompt.style.display =
    chatPrompt.style.display === "flex" ? "none" : "flex";
});

// Send Message
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage("user", message);
    userInput.value = "";
    generateBotResponse(message);
  }
});

// Add Message to Chat
function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Simulate Bot Response
function generateBotResponse(userMessage) {
  let response = "I'm here to help! Ask me anything.";
  if (userMessage.toLowerCase().includes("hello")) {
    response = "Hi there! How can I assist you today?";
  }
  addMessage("bot", response);
}
sendBtn.addEventListener("click", sendMessage);

// Function to Send Message
function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    addMessage("user", message); // Add user message
    userInput.value = ""; // Clear input field
    generateBotResponse(message); // Simulate bot response
  }
}

// Send Message on Enter Key Press
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    sendMessage();
  }
});
