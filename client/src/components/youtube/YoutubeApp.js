import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Header from "./Header";
import axios from "axios";

class YoutubeApp extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("JavaScript");
  }

  onTermSubmit = async term => {
    const tokenStorage = axios.defaults.headers.common["Authorization"];
    //remove auth token so that logged in user can search youtube without a 401 error
    delete axios.defaults.headers.common["Authorization"];
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    //added auth token back once axios request is made
    axios.defaults.headers.common["Authorization"] = tokenStorage;

    // console.log(term);
    //console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log("from the app", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <Header />
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeApp;
