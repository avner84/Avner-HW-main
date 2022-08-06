import * as viewAfterLogin from "./view.js";

export function welcome(obj) {
    console.log("you are login");
    console.log(obj);

    viewAfterLogin.showUI(obj);
}