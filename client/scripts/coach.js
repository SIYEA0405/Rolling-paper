const MockData = [
  {
    name: "test",
    content: "lorem ipsum............................",
  },
  {
    name: "test",
    content: "lorem ipsum............................",
  },
  {
    name: "test",
    content: "lorem ipsum............................",
  },
  {
    name: "test",
    content: "lorem ipsum............................",
  },
  {
    name: "test",
    content: "lorem ipsum............................",
  },
  {
    name: "test",
    content: "lorem ipsum............................",
  },
];

const createLi = ({ name, content }) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <p>이름: ${name}</p>
        <p>- ${content}</p>
    `;
  return li;
};

const coachPage = async () => {
  const { pathname } = location;
  try {
    // const data = await (await fetch(pathname)).json();
    // console.log(data);
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    MockData.forEach((content) => ul.appendChild(createLi(content)));
  } catch (e) {
    console.log(e);
  }
};

window.addEventListener("DOMContentLoaded", coachPage);
