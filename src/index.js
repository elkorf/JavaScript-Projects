const searchQueryURL =
  "https://api.github.com/repos/elkorf/JavaScript-Projects/contents/All-Projects";

var project = document.querySelector(".project-container");
var path;
window.addEventListener("DOMContentLoaded", async function (e) {
  try {
    const response = await fetch(searchQueryURL);
    const result = await response.json();

    for (let i = 0; i < result.length; i++) {
      const project_data = document.createElement("a");
      path = result[i].path;
      project_data.href = path;
      project_data.target = "_blank";
      project_data.className = "project-item";
      project_data.innerHTML =
        `<div class="project-preview">
        <img
          src=` +
        path +
        `/Output-SS.PNG
          alt=""
          srcset=""
        />
        <div class="demo-code">
          <a href=` +
        path +
        `><button>Demo</button></a>
          <a href=` +
        result[i].html_url +
        `><button>Code</button></a>
        </div>
      </div>
      <div class="project-title"><h2>` +
        result[i].name +
        `</h2></div>`;

      project.appendChild(project_data);
    }
  } catch (err) {
    return console.log(err);
  }
});
