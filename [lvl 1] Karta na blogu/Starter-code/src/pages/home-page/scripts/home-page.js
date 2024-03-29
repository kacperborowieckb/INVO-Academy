/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";
import "../styles/user.scss";
import "../styles/text-content.scss";
import "../styles/button.scss";

import { setupCounter } from "../../../global-scripts/scripts/counter/counter.js";

setupCounter(document.querySelector("#counter"));
