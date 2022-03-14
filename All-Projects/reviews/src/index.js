const url1 = 'https://raw.githubusercontent.com/elkorf/JavaScript-Projects/master/data.txt'
window.addEventListener("DOMContentLoaded", async function (e) {
    try {
      const response = await fetch(url1);
      const result = await response.text();
      console.log(result);
    } catch (err) {
      return console.log(err);
    }
  });