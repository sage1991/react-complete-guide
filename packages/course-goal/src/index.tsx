import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./index.css";


const root = document.querySelector<HTMLDivElement>("#root")
render(<App />, root);
