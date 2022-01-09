import React, { useEffect, useState } from "react";
import MainTable from "./MainTable";
import './WorkersMain.css'

function WorkersMain() {
  const [workers, SetWorkers] = useState([]);

  useEffect(() => {
    CallApi();
  }, []);

  const CallApi = async () => {
    const data = await fetch(
      "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"
    );
    const users = await data.json();
    SetWorkers(users.results);
  };
  return (
    <div className="container">
      <div className="row align-items-workers">
        <div className="title-workersMain">Find your Oompa Loompa</div>
        <MainTable workers={workers} />
      </div>
    </div>
  );
}

export default WorkersMain;
