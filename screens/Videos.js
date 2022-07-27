import React, {useContext} from "react";
import { StateProviders } from "../Context/StateContext";
import VideoContainer from "../components/VideoContainer";

const Videos = () => {
  return (
    <StateProviders>
        <VideoContainer />
    </StateProviders>
  );
};

export default Videos;
