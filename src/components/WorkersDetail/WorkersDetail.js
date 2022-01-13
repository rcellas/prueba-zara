import React, { useState, useEffect } from "react";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import { useParams } from "react-router-dom";

const WorkersDetail = () => {
  const { id } = useParams();
  const [workerDetail, setWorkerDetail] = useLocalStorage('Detail Worker Oompa Lompa',[]);

  useEffect(() => {
    CallApi();
  }, []);

  const CallApi = async () => {
    const data = await fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
    );
    const users = await data.json();
    console.log("u", users);
    setWorkerDetail(users);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={workerDetail.image} />
        </div>
        <div className="col">
          <div>
            <h3>{workerDetail.first_name + "  " + workerDetail.last_name}</h3>
            <h4>{workerDetail.gender === "F" ? "Female" : "Male"}</h4>
            <h4>{workerDetail.profession}</h4>
          </div>
          <div>
            <h5>{workerDetail.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkersDetail;
