import "./style.css";
import { encrypt } from "./web-cryptop";

const app = document.querySelector<HTMLDivElement>("#app")!;
const word = "piyush";

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <div>
    <div>Input: ${word}</div>
    <span>Output: ${encrypt(word)}</span>
  </div>
`;
