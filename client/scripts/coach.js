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
          <button class="modal_submit_cancel">작성 취소</button>
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
    .querySelector(".modal_submit_cancel")
    .addEventListener("click", () => {
      document.body.removeChild(modalDiv);
    });
});
