import React from "react";
import Closed from "./Closed/Closed"


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <Closed />
            <slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;