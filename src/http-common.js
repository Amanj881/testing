import axios from "axios";

export default axios.create({
  baseURL: "https://lawj.herokuapp.com/api",
   headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            }
 
});