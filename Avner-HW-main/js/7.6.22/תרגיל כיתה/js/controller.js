function inputsAndBtnGenerator() {
    var input1 = document.createElement("input");
    input1.setAttribute("type", "email");
    var input2 = document.createElement("input");
    input1.setAttribute("type", "password");
    var btn = document.createElement("button");
    btn.innerHTML = "click me";

    var main = document.querySelector("main");

    main.appendChild(input1);
    main.appendChild(input2);
    main.appendChild(btn);

}