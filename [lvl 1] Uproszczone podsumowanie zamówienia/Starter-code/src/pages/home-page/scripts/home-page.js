/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss"
import "../styles/card.scss"
import "../styles/buttons.scss"
import "../styles/product.scss"

import { setupCounter } from "../../../global-scripts/scripts/counter/counter.js"

setupCounter(document.querySelector("#counter"))
