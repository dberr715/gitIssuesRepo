"use strict";
async function getWithAwait(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error right here!", error);
  }
}
const apiUrl = "https://api.github.com/repos/facebook/create-react-app/issues";
const paraFilled = document.querySelector("#issueSpot");

async function displayIssues(data) {
  for (const issues of data) {
    const issuesContainer = document.createElement("div");

    const titlePara = document.createElement("p");
    titlePara.innerHTML = data.title;

    const bodyPara = document.createElement("p");
    bodyPara.innerHTML = data.body;

    issuesContainer.appendChild(titlePara);
    issuesContainer.appendChild(bodyPara);

    paraFilled.appendChild(issuesContainer);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  console.log("Party Time");
  try {
    const data = await getWithAwait(apiUrl);
    displayIssues(data);
    // console.log(data);
  } catch (error) {
    console.error("Hold up. Wait a minute. Somethin ain't right!", error);
  }
});
