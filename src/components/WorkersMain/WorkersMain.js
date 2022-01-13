import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import MainTable from "./MainTable";
import "./WorkersMain.css";

function WorkersMain() {
  const [workers, SetWorkers] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useLocalStorage('Workers list Oompa Loompa',[]);
  const inputEl = useRef("");

  useEffect(() => {
    CallApi();
  }, []);

  const searchHandler = (searchTerm) => {
    SetSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newWorkerList = workers.filter((worker) => {
        if (
          worker.first_name.toString().includes(searchTerm) ||
          worker.last_name.toString().includes(searchTerm) ||
          worker.profession.toString().includes(searchTerm)
        ) {
          return Object.values(worker)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
      });
      setSearchResult(newWorkerList);
    } else {
      setSearchResult(workers);
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
        <h1 className="title-workersMain">Find your Oompa Loompa</h1>
        <h2 className="subtitle-workersMain">There are more than 10K</h2>
        <form className="d-flex justify-content-end ">
          <div className="col-md-2 col-sm-12 input-search">
            <input
              ref={inputEl}
              id="search"
              className="form-control col-md-4 justify-content-end"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={getSearchTerm}
            />
          </div>
        </form>
        <MainTable  workers={searchTerm.length < 1 ? workers : searchResult} />
      </div>
    </div>
  );
}

export default WorkersMain;
