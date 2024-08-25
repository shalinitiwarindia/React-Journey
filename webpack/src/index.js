import {sum,mult} from "./calc";
import "./index.css";

console.log(sum(6,5));
console.log(mult(4,5));

const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.classList.add("redtext");
root.appendChild(h1);
