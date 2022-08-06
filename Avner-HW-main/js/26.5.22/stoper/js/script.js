const T = {
    mili: 0,
    sec: 0,
    min: 0,
    hour: 0,
    start: function() {
        this.interval = setInterval(turnOnStoper, 10)
    },
    stop: function() {

        clearInterval(this.interval);
        B.start.removeEventListener("click", T.start);
    },
    reset: function() {


        clearInterval(this.interval);
        B.start.removeEventListener("click", T.start);

        T.mili = 0;
        T.sec = 0;
        T.min = 0;
        T.hour = 0;
        $.mili.innerHTML = "00";
        $.min.innerHTML = "00";
        $.sec.innerHTML = "00";
        $.hour.innerHTML = "00";

        B.start.addEventListener("click", T.start);

    },
};

const $ = {
    mili: document.querySelector("#mili"),
    sec: document.querySelector("#seconds"),
    min: document.querySelector("#minutes"),
    hour: document.querySelector("#hoursׁׁׁ")
};
const B = {
    start: document.querySelector("#start"),
    stop: document.querySelector("#stop"),
    reset: document.querySelector("#reset"),
};

function turnOnStoper() {

    T.mili++;
    $.mili.innerHTML = T.mili < 10 ? "0" + T.mili : T.mili;

    if (T.mili > 99) {
        T.mili = 0;
        T.sec++;
        $.sec.innerHTML = T.sec < 10 ? "0" + T.sec : T.sec;
    }

    if (T.sec > 59) {
        T.sec = 0;
        T.min++;
        $.min.innerHTML = T.min < 10 ? "0" + T.min : T.min;
    }

    if (T.min > 59) {
        T.min = 0;
        T.hour++;
        $.hour.innerHTML = T.hour < 10 ? "0" + T.hour : T.hour;
    }

    T.hour = T.hour > 23 ? 0 : T.hour;
}