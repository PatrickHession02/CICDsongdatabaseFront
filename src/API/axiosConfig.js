import axios from "axios";

export default axios.create({
    baseURL:'https://3cfe-79-140-211-73.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});