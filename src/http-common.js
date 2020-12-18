import axios from "axios";

export default axios.create({
  baseURL: "https://law-b.herokuapp.com/api",
   headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':*,
             'dataType': 'jsonp',
            }
 
});