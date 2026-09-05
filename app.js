document.getElementById("appForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const entry = {};
  formData.forEach((value, key) => entry[key] = value);

  const stored = JSON.parse(localStorage.getItem("applications") || "[]");
  stored.push(entry);
  localStorage.setItem("applications", JSON.stringify(stored));

  alert("Data saved in browser.");
  this.reset();
});