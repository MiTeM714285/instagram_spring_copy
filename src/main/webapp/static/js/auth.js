const input_items = document.querySelectorAll(".input-items");
const username_input = input_items[0].querySelector("input");
const username_label = input_items[0].querySelector("label");
const password_input = input_items[1].querySelector("input");
const password_label = input_items[1].querySelector("label");
const signin_button = input_items[2].querySelector("button");

username_input.onkeydown = () => {
    if (window.event.keyCode == 13) {
        password_input.focus();
    } else {
        username_label.style.top = "2px";
        username_label.style.fontSize = "11px";
    }
}

username_input.onkeyup = () => {
    if (username_input.value.length == 0) {
        username_label.style.top = "10px";
        username_label.style.fontSize = "13px";
    }
}

password_input.onkeydown = () => {
    if (window.event.keyCode == 13) {
        signin_button.click();
    } else {
        password_label.style.top = "2px";
        password_label.style.fontSize = "11px";
    }
}

password_input.onkeyup = () => {
    if (password_input.value.length == 0) {
        password_label.style.top = "10px";
        password_label.style.fontSize = "13px";
    }
}
