import axios from "axios";


const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key:"AIzaSyByCRsR4mDgxrnmXOGqXmzuu_tZxKoKHEg",
    },
})
export default request