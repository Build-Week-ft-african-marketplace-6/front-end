import axios from 'axios';

const axiosWithAuth = () =>{
    const token = localStorage.getItem("authorization")
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://web-45-heroku-tb.herokuapp.com/api"
    });
}
export default axiosWithAuth