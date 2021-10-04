import React from "react";
import Skeleton from "react-loading-skeleton";

class ProductSkeleton extends React.Component {
  render() {
    return (

        <div
        id="bigfoodDiv"
        className=" container d-flex justify-content-center flex-wrap pt-5"
      >
      <div className="row pt-5 container">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="d-inline">
            <Skeleton style={{ width: "60px" }} />
            <Skeleton style={{ marginLeft: "30px", width: "60px" }} />
            <Skeleton style={{ marginLeft: "30px", width: "60px" }} />
          </div>

          <div>
            <div className="pt-5">
              <Skeleton style={{ width: "200px", height: "30px" }} />
            </div>
            <div style={{ paddingTop: "30px" }}>
              <div className="d-inline">
                <Skeleton circle height={65} width={65} />
                <Skeleton
                  circle
                  height={65}
                  width={65}
                  style={{ marginLeft: "20px" }}
                />
              </div>
            </div>

            <div>
              <Skeleton style={{ width: "80%", marginTop: "20px" }} />
            </div>
            <div>
              <Skeleton style={{ width: "80%" }} />
            </div>
            <div>
              <Skeleton style={{ width: "80%", marginTop: "40px" }} />
            </div>

            <div>
              <Skeleton style={{ width: "130px", marginTop: "35px" }} />
            </div>
            <div>
              <Skeleton style={{ width: "130px" }} />
            </div>

            <div className="d-inline">
              <Skeleton
                style={{ width: "110px", height: "35px", marginTop: "35px" }}
              />
              <Skeleton
                style={{
                  marginLeft: "20px",
                  width: "110px",
                  height: "35px",
                  marginTop: "35px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 pt-3 pt-md-0">
          <Skeleton style={{ width: "100%", height: "400px" }} />

          <div>
            <div className="d-flex justify-content-around">
              <Skeleton
                style={{ width: "70px", height: "80px", margin: "5px" }}
              />
              <Skeleton
                style={{ width: "70px", height: "80px", margin: "5px" }}
              />
              <Skeleton
                style={{ width: "70px", height: "80px", margin: "5px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12">
 
          <Skeleton
            style={{ width: "100%", height: "300px", margin: "7px" }}
          />
          <Skeleton
            style={{
              width: "100%",
              height: "100px",
              margin: "7px",
              paddingTop: "100px",
            }}
          />

          <div>
            <div className="d-flex justify-content-center">
              <Skeleton circle height={90} width={90} />
              <Skeleton
                circle
                height={90}
                width={90}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProductSkeleton;
