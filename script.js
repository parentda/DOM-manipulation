const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

container.appendChild(header3);

const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "2px solid black";

const subHeading = document.createElement("h1");
subHeading.textContent = "I'm in a div";

const subParagraph = document.createElement("p");
subParagraph.textContent = "ME TOO!";

// pinkDiv.append(subHeading, subParagraph);
pinkDiv.appendChild(subHeading);
pinkDiv.appendChild(subParagraph);
container.appendChild(pinkDiv);
