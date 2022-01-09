import React from "react";

const MainTable = (props) => {
  console.log("props", props);
  return (
    <>
      {props.workers.map((w) => (
        <div class="card col-md-3">
          <img src={w.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{w.first_name + `<br>` + w.last_name}</h5>
            <p class="card-text">{w.profession}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainTable;
