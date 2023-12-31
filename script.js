import { packages } from "./packages.js";

let step = 0;
let glitch = false;

const base = document.querySelector("main");
const pkgs = [];

function frame() {
    const pkg = document.createElement("span");
    const name = packages[Math.floor(Math.random() * packages.length)];

    pkg.innerHTML = `installing <span>${name}</span>`;
    if (glitch) {
        pkg.dataset.text = "installing " + name;
        pkg.style.setProperty("--duration", `${glitch}s`);
        pkg.style.setProperty("--distance", `${1 / glitch - 1}px`);
        pkg.style.setProperty("--ndistance", `-${1 / glitch - 1}px`);
    }

    base.appendChild(pkg);
    pkgs.push(pkg);
    if (pkgs.length > 100) {
        let pkg = pkgs.shift();
        base?.removeChild(pkg);
    }
    window.requestAnimationFrame(frame);
}

const pkgManagers = ["npm install", "pnpm install", "yarn add", "bun install"];
const cmdText = `${
    pkgManagers[Math.floor(Math.random() * pkgManagers.length)]
} everything`;

const cmd = document.querySelector(".first > p");
const caret = document.querySelector(".caret");

function type() {
    if (step != cmdText.length) {
        cmd.textContent += cmdText[step];
        step++;
        setTimeout(() => {
            window.requestAnimationFrame(type);
        }, Math.random() * 30 + 100);
    } else {
        caret.classList.add("blink");
        step = -1;
        setTimeout(() => {
            window.requestAnimationFrame(frame);
        }, 1000);
    }
}

setTimeout(() => {
    window.requestAnimationFrame(type);
    caret.classList.remove("blink");
}, 2000);

const audio = new Audio("fan.mp3");
const vid = document.querySelector("video");
vid.load();
audio.addEventListener("ended", () => {
    vid.style.opacity = "1";
    setTimeout(() => vid.play(), 1000);
});
vid.addEventListener("ended", () => {
    window.location = "https://github.com/everything-registry/everything";
});

document.body.addEventListener(
    "click",
    function () {
        audio.volume = 0;
        audio.play();
        let interval = setInterval(function () {
            audio.volume += 0.0001;
            if (audio.volume >= 0.25) {
                audio.volume = 0.25;
                clearInterval(interval);
            }
        }, 10);
    },
    { once: true }
);

setTimeout(() => {
    glitch = 1;
    function increaseto3() {
        let interval3 = setInterval(function () {
            glitch += 0.001;
            if (glitch >= 0.3) {
                glitch = 0.3;
                clearInterval(interval3);
            }
        }, 10);
    }
    let interval2 = setInterval(function () {
        glitch -= 0.001;
        if (glitch <= 0.001) {
            glitch = 0.001;
            clearInterval(interval2);
            increaseto3();
        }
    }, 10);
}, 10_000);
