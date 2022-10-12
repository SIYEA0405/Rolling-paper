const init = () => {
  const coachContainers = document.querySelectorAll(".coach_page");
  coachContainers.forEach((node) =>
    node.addEventListener("click", ({ target }) => {
      while (!target.classList.contains("coach")) {
        target = target.parentNode;
      }
      const coach = target.classList[0];
      const targetUri =
        coach === "theory_coach"
          ? "/theory"
          : coach.startsWith("first")
          ? "/class1"
          : "/class2";
      location.href = `${targetUri}`;
    })
  );
};

window.addEventListener("DOMContentLoaded", init);
