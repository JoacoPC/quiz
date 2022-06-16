import React from "react";
import axios from "axios";

export async function getCategories() {
  return await axios.get("https://opentdb.com/api_category.php").then((res) => {
    return res.data.trivia_categories;
  });
}

export function getQuizes() {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
    return res.data.results[0];
  });
}