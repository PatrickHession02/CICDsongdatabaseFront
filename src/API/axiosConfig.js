import axios from "axios";

export default axios.create({
    baseURL:"https://9c96-103-106-239-104.ap.ngrock.io",
    headers:{"ngrock-skip-browser-warning": "true"}
})