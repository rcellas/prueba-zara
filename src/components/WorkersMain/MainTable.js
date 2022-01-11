import React from "react";
import { Link } from "react-router-dom";

const MainTable = (props) => {
  return (
    <>
      {props.workers.map((w) => (
        <div className="card col-md-3" key={w.id}>
          <img src={w.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><Link to={{pathname:`/worker/${w.id}`}} >{w.first_name + ' ' + w.last_name}</Link></h5>
            <p className="card-text">{w.profession}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainTable;
