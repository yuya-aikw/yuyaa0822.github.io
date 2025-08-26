document.addEventListener("DOMContentLoaded", function() {
  const loadHTML = (selector, url) => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
  };

  // 各パーツを読み込む
  loadHTML("#works-placeholder", "_works.html");
  loadHTML("#skill-placeholder", "_skill.html");
  loadHTML("#about-placeholder", "_about.html");
  loadHTML("#contact-placeholder", "_contact.html");
});