import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</HashRouter>
);
