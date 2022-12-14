const createLi = ({ userName, comment }) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <p>이름: ${userName}</p>
        <p>- ${comment}</p>
    `;
  return li;
};
const addComment = (comment) => {
  const ul = document.querySelector("ul");
  ul.appendChild(createLi(comment));
};
const coachPage = async () => {
  const { pathname } = location;
  const coachName = document.querySelector(".coach_name");
  coachName.innerText =
    pathname === "/theory"
      ? "박ㅇㅇ 코치님"
      : pathname === "/class1"
      ? "이ㅇㅇ 코치님"
      : "조ㅇㅇ 코치님";
  const coachImg = document.querySelector("img");
  coachImg.src =
    pathname === "/theory"
      ? "/images/이론.png"
      : pathname === "/class1"
      ? "/images/1반.png"
      : "/images/2반.png";
  try {
    const data = await (await fetch(`${pathname}/posts`)).json();
    const ul = document.querySelector("ul");
    // console.log(data);
    ul.innerHTML = "";
    data.forEach((content) => ul.appendChild(createLi(content)));
    // MockData.forEach((content) => ul.appendChild(createLi(content)));
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
  modalDiv.addEventListener("click", ({ target }) => {
    if (target.className === "modal_layout") {
      document.body.removeChild(modalDiv);
    }
  });
  document
    .querySelector(".modal_submit_cancel")
    .addEventListener("click", () => {
      document.body.removeChild(modalDiv);
    });
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputName = document.querySelector(".modal_main_name");
    const inputContent = document.querySelector(".modal_main_compliment");
    try {
      const { pathname } = location;
      if (confirm("등록하시겠습니까?")) {
        if (inputName.value.length >= 3 && inputContent.value.length >= 10) {
          const response = await (
            await fetch(`${pathname}/posts`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userName: inputName.value,
                comment: inputContent.value,
              }),
            })
          ).json();
          document.body.removeChild(modalDiv);
          addComment({
            userName: inputName.value,
            comment: inputContent.value,
          });
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
