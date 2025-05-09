import { storeViewByName } from "./renderer";
import Home from "./view/Home";
import Login from "./view/Login";
import Register from "./view/Register";

export default function initView() {
    storeViewByName('home', Home)
    storeViewByName('login', Login)
    storeViewByName('register', Register)
}