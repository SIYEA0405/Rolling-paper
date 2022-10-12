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
const addComment = (comment) => {
  const ul = document.querySelector("ul");
  ul.appendChild(createLi(comment));
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
      <form class="modal">
        <div class="modal_header">
          <p>칭찬 카드 작성</p>
        </div>
        <div class="modal_main">
          <div>
            <p>이름</p>
            <input
              class="modal_main_name"
              placeholder="실명을 입력해주세요."
              required
            />
          </div>
          <div >
            <p>내용</p>
            <textarea
              class="modal_main_compliment"
              placeholder="칭찬 한마디!"
              required
            ></textarea>
          </div>
        </div>
        <div class="modal_submit">
          <button class="modal_submit_cancel">작성 취소</button>
          <button class="modal_submit_button" type="submit">카드 제출</button>
        </div>
      </form>
              `;

const add_btn = document.querySelector(".compliment_button");

add_btn.addEventListener("click", () => {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("class", "modal_layout");
  modalDiv.innerHTML = modal;
  document.body.prepend(modalDiv);

  document
    .querySelector(".modal_submit_cancel")
    .addEventListener("click", () => {
      document.body.removeChild(modalDiv);
    });
  modalDiv.querySelector("form").addEventListener("submit", async (e) => {
    e.prenvetDefault();
    const inputName = document.querySelector(".modal_main_name");
    const inputContent = document.querySelector(".modal_main_compliment");
    try {
      const { pathname } = location;
      const confirm = confirm("등록하시겠습니까?");
      if (confirm) {
        if (inputName.value.length >= 3 && inputContent.value.length >= 10) {
          const response = await (
            await fetch(`${pathname}/posts`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: inputName.value,
                cmt: inputContent.value,
              }),
            })
          ).json();
          if (response.ok) {
            document.body.removeChild(modalDiv);
            addComment({ name: inputName.value, comment: inputContent.value });
          } else {
            alert("Error, 등록 실패");
          }
        } else {
          alert("길이가 짧습니다.");
          inputName.focus();
        }
      }
    } catch (e) {
      console.log(e);
    }
  });
});
