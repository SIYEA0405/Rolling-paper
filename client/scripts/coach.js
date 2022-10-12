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

const modal = `
<div class="modal">
        <div class="modal_header">
          <p>칭찬 카드 작성</p>
        </div>
        <div class="modal_main">
          <div>
            <p>이름</p>
            <input
              class="modal_main_name"
              placeholder="실명을 입력해주세요."
            ></>
          </div>
          <div >
            <p>내용</p>
            <textarea
              class="modal_main_compliment"
              placeholder="칭찬 한마디!"
            ></textarea>
          </div>
        </div>
        <div class="modal_submit">
          <button class="modal_submit_cancl">작성 취소</button>
          <button class="modal_submit_button">카드 제출</button>
        </div>
      </div>
              `;

const add_btn = document.querySelector(".compliment_button");

add_btn.addEventListener("click", () => {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("class", "modal_layout");
  modalDiv.innerHTML = modal;
  document.body.prepend(modalDiv);

  document
    .querySelector(".modal_submit_cancl")
    .addEventListener("click", () => {
      document.body.removeChild(modalDiv);
    });
});
