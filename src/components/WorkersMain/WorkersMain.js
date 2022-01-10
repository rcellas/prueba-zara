import React, { useEffect, useState, useRef } from "react";
import MainTable from "./MainTable";
import "./WorkersMain.css";

function WorkersMain() {
  const [workers, SetWorkers] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const inputEl = useRef("");

  useEffect(() => {
    CallApi();
  }, []);

  const searchHandler = (searchTerm) => {
    SetSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newWorkerList = workers.filter((worker) => {
        return Object.values(worker).join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
          ;
      });
      setSearchResult(newWorkerList);
    }else{
      setSearchResult(workers)
    }
  };
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  };
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
        <form className="d-flex">
          <input
            ref={inputEl}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={getSearchTerm}
          />
        </form>
        <MainTable workers={searchTerm.length < 1 ?workers : searchResult} />
      </div>
    </div>
  );
}

export default WorkersMain;
