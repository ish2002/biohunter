import axios from "axios";
import React, { Component } from "react";

async function addUser(data) {
    var result = false;
    await axios
      .post(`${config.API_URL}/users`, data)
      .then((res) => {
        const user = res.data;
        console.log(user);
        result = user;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  }
  
async function getAnimal(data) {
    var result = false;
    await axios
      .post(`${config.API_URL}/animal`, data)
      .then((res) => {
        const user = res.data;
        console.log(user);
        result = user;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
}
  