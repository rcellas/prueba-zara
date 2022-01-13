import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const MainTable = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
        {props.workers.map((w) => (
          <div className="card col-md-3" data-aos="fade-up" key={w.id}>
            <img src={w.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={{ pathname: `/worker/${w.id}` }}>
                  {w.first_name + " " + w.last_name}
                </Link>
              </h5>
              <p className="card-text">{w.profession}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default MainTable;
