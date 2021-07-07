import axios from "axios";

const KEY = "AIzaSyDefqlsxLZJuRgfTgC8xY_httVX0VZv7aU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  }
});
