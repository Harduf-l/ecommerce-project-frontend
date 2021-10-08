import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let Favorites = () => {
  const [loveArray, setLoveArray] = useState([]);

  useEffect(() => {
    let currentLoveArray = [];

    if (
      localStorage.getItem("loveCart") == null ||
      localStorage.getItem("loveCart") === []
    ) {
      currentLoveArray = [];
    } else {
      currentLoveArray = JSON.parse(localStorage.getItem("loveCart"));
    }

    setLoveArray(currentLoveArray);
  }, []);

  let removeItem = (index) => {
    console.log(index);

    let currentArray = [...loveArray];
    currentArray.splice(index, 1);
    localStorage.setItem("loveCart", JSON.stringify(currentArray));
    setLoveArray(currentArray);
  };

  return (
    <div>
      <span className="homeHeaderSpan">
        <h2 className="homeHeader" style={{ marginBottom: "60px" }}>
          Wish list
        </h2>
      </span>

      <table className="table smaller-phone-th">
        <thead>

        </thead>
        <tbody>
          {loveArray.map((item, index) => {
            return (
              <tr style={{ borderColor: "black" }}>
                <td style={{ borderColor: "#cecece" }}>
                  <div className="flex d-flex flex-wrap align-items-center">
                    <Link
                      to={`/product/${item.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#2b3239",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "20%",
                          height: "80px",
                          width: "70px",
                          objectFit: "cover",
                        }}
                        src={item.pic1}
                        alt={"food product"}
                      />
                    </Link>
                  </div>
                </td>

                <td
                  style={{
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    borderColor: "#cecece",
                  }}
                >
                  {item.header}
                </td>

                <td
                  style={{
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    borderColor: "#cecece",
                  }}
                >
                  ${item.price}
                </td>
                
                <td
                  style={{
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    borderColor: "#cecece",
                  }}
                >
                <button className="dltbtn" onClick={()=>removeItem(index)}>X</button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Favorites;