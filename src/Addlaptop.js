import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Addlaptop() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://62da4c195d893b27b2f50d26.mockapi.io/laptop/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, [params.id]);

  return (
    <>
    <h1><u>Add New Laptop</u></h1>
    <div class="tbl">
      <table>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>
            <input
              value={data.Name}
              type="text"
              onChange={(e) => setData({ ...data, Name: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Image</td>
          <td>:</td>
          <td>
            <input
              value={data.Image}
              type="text"
              onChange={(e) => setData({ ...data, Image: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Ram</td>
          <td>:</td>
          <td>
            <input
              value={data.Ram}
              type="text"
              onChange={(e) => setData({ ...data, Ram: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Hard Disk</td>
          <td>:</td>
          <td>
            <input
              value={data.Harddisk}
              type="text"
              onChange={(e) =>
                setData({ ...data, Harddisk: e.target.value })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Processor</td>
          <td>:</td>
          <td>
            <input
              value={data.Processor}
              type="text"
              onChange={(e) => setData({ ...data, Processor: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={3} class="td">
            <button class=" btn bg-secondary text-white"
              type="submit"
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://62da4c195d893b27b2f50d26.mockapi.io/laptop/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/name");
                  });
                } else {
                  fetch(
                    "https://62da4c195d893b27b2f50d26.mockapi.io/laptop/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/name");
                  });
                }
              }}
            >
              {params.id > 0 && "EDIT"}
              {!(params.id > 0) && "Add  "}
            </button>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}

export default Addlaptop;