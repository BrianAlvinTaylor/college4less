// Parse topic ID from URL
const params = new URLSearchParams(window.location.search);
const topicId = params.get("id");

// Get DOM targets
const titleEl = document.getElementById("topic-title");
const overviewEl = document.getElementById("overview");
const themesEl = document.getElementById("themes");
const tipEl = document.getElementById("tip");
const booksEl = document.getElementById("books");

// Get the topic object
const topic = topics[topicId];

if (!topic) {
  titleEl.textContent = "Topic Not Found";
  overviewEl.textContent = "We couldn't find this topic. Please return to the topics page.";
} else {
  titleEl.textContent = topic.title;
  overviewEl.textContent = topic.overview;
  tipEl.textContent = topic.quickTip;

  // Render themes
  topic.themes.forEach(theme => {
    const li = document.createElement("li");
    li.textContent = theme;
    themesEl.appendChild(li);
  });

  // Render books
  topic.books.forEach(book => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `https://www.amazon.com/dp/${book.asin}?tag=college4les0a-20`;
    a.target = "_blank";
    a.textContent = book.title;
    if (book.recommended) a.classList.add("recommended");
    li.appendChild(a);
    booksEl.appendChild(li);
  });
}
