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
      // console.log(result[i]);
      console.log(path + "/Output-SS.PNG");
      project_data.innerHTML =
        `<div class="project-preview">
        <img
          src=` +
        path +
        `/Output-SS.PNG
          alt=""
          srcset=""
        />
      </div>
      <div class="project-title"><h2>` +
        result[i].name +
        `</h2></div>`;

      project.appendChild(project_data);
    }
    // for (let i = 0; i < 2; i++) {
    //   const project_data = document.createElement("div");
    //   project_data.innerHTML =
    //     `<div class="project-container">
    //   <a
    //     href=` +
    //     result[i].path +
    //     `
    //     target="_blank"
    //     class="project-item"
    //   >
    //     <div class="project-preview">
    //       <img
    //         src="./All-Projects/color-flipper/Output-SS.PNG"
    //         alt=""
    //         srcset=""
    //       />
    //     </div>
    //     <div class="project-title"><h2>` +
    //     result[i].name +
    //     `</h2></div>
    //   </a>
    // </div>`;
    //   project.appendChild(project_data);
    // }
  } catch (err) {
    return console.log(err);
  }
});
