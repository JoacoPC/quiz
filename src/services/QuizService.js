import React from "react";
import axios from "axios";

var baseUrl = "https://opentdb.com/";

export async function getCategories() {
  const url = baseUrl + "api_category.php";
  return await axios.get(url).then((res) => {
    return res.data.trivia_categories;
  });
}

export async function getQuiz(categoryId) {
    const url = baseUrl + "api.php?amount=10&category=" + categoryId + "&type=multiple";
    return await axios.get(url).then((res) => {
      return res.data.results;
  });
}