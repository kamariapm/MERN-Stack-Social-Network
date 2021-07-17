import axios from "axios";

const KEY = "AIzaSyAN--ZpJcypypRqZEnk6rAok2TJ5OlB3q4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  }
});
