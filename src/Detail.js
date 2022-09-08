import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./styles.css";

function Detail() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://62da4c195d893b27b2f50d26.mockapi.io/laptop/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setDetail(res);
      });
  }, []);

  return (
    <>
      <h2>Laptop Detail</h2>
      <div class="card1">
        <img src={detail.Image} class="card-img-top1" alt="12" />
        <div class="card-body">
          <p class="card-text">
            <table>
              <tr>
                <td>
                  <h6>Name</h6>
                </td>
                <td>:</td>
                <td>
                  <h6>&nbsp;{detail.Name}</h6>
                </td>
              </tr>
              <tr>
              <td>
                  <h6>RAM</h6>
                </td>
                <td>:</td>
                <td>
                  <h6>&nbsp;{detail.Ram}</h6>
                </td>
              </tr>
              <tr>
              <td>
                  <h6>Hard disk</h6>
                </td>
                <td>:</td>
                <td>
                  <h6>&nbsp;{detail.Harddisk}</h6>
                </td>
              </tr>
              <tr>
              <td>
                  <h6>Processor</h6>
                </td>
                <td>:</td>
                <td>
                  <h6>&nbsp;{detail.Processor}</h6>
                </td>
              </tr>
              <tr>
              <td>
                  <h6>Graphics card</h6>
                </td>
                <td>:</td>
                <td>
                  <h6>&nbsp;{detail.GraphicsCard}</h6>
                </td>
              </tr>
                <tr>
                <td class="justify-content-end">
                  <Link to={"../name"}>
                    <button class=" btn bg-secondary text-white">Back</button>
                  </Link>
                </td>
              </tr>
              <button class=" btn bg-secondary text-white"
        onClick={() => {
          fetch(
            "https://62da4c195d893b27b2f50d26.mockapi.io/laptop/" + params.id,
            {
              method: "DELETE"
            }
          )
            .then((res) => {
              return res.json();
            })
            .then(() => {
              return navigate("/name");
            });
        }}
      >
        DELETE
      </button>
      &nbsp;&nbsp;
      <button class=" btn bg-secondary text-white"
        onClick={() => {
          return navigate("/addlaptop/" + params.id);
        }}
      >
        UPDATE
      </button>
            </table>
          </p>
        </div>
      </div>
    </>
  );
}

export default Detail;