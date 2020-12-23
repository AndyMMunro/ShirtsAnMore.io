fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

import axios from "axios";
const BASEURL = "https://fakestoreapi.com/products";
const APIKEY = "";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
