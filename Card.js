

import React from "react";

const Card = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 01</h5>
          {<p>It was fun making these cards</p>}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 02</h5>
          {<p>Hello this holds card 02 information</p>}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 03</h5>
          {<p>Sample card text would be inserted here</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
