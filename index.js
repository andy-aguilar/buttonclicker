document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("#button");
  const buttonTwo = document.querySelector("#button-2");

  button.addEventListener("click", () => {
    alert("Oh dang, you clicked the thing!");
  });
  
  buttonTwo.addEventListener("click", () => {
    alert("Wow, you really shouldn't have clicked me");
  });

});
