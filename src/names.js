import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
function Name() {
  const [Name, setNames] = useState([]);
  useEffect(() => {
    fetch("https://62da4c195d893b27b2f50d26.mockapi.io/laptop")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setNames(res);
      });
  }, []);

  const newName = Name.map((news) => {
    return (
      <>
        <div class="card text-center">
          <div class="card-body">
            <img src={news.Image} alt="..." />
            <h5>{news.Name}</h5>
            <Link to={"../Detail/" + news.id}>
            <a href="#" class="btn btn-secondary ">
              More details
            </a>
            </Link>
          </div>
        </div>
      </>
    );
  });
  return <div class="row">{newName}</div>;
}
export default Name;