import axios from "axios";

export default axios.create({
  baseURL: "http://law-b.herokuapp.com/api",
   headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            
            }
 
});