var formElement = document.forms["formElement"];

for (let i = 0; i < formElement.length; i++) {
  formElement[i].onfocus = function (evt) {
    formElement[i].classList.add("focused");

    formElement[i].onblur = function (evt) {
      formElement[i].classList.remove("focused");
    };
  };
}
