/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: Dixit
 */
import axios from "axios";

var config = {
  headers: {
    "Content-Type": "application/json"
  }
};

var langHeaders = () => {
  return { headers: { ...config.headers, lang: "en" } };
};

class ApiClient {
  static post(url, params) {
    return new Promise((fulfill, reject) => {
      console.log("url ;", url);
      axios
        .post(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url) {
    return new Promise((fulfill, reject) => {
      axios
        .get(url, langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }
}

export default ApiClient;
