import * as React from "react";
import { Card } from '@material-ui/core';
import  {Link } from "react-router-dom";



let Dashboard = () => (
    <>
    <Card>
        <div className="d-flex flex-wrap justify-content-center pt-3">

            <Link to="/users" style={{textDecoration: "none"}}>
            <div style={{height: "200px", margin: "10px", width: "180px", color:"#a2a2a2", backgroundColor: "white"}}>
                <div style={{textAlign: "center", margin: "0 auto", padding: "10px"}}><i style={{fontSize: "130px"}} class="fas fa-user"></i></div>
                <p style={{fontSize: "30px", textAlign: "center"}}>Users</p>
            </div>
            </Link>

            <Link to="/orders" style={{textDecoration: "none"}}>
            <div  style={{height: "200px", margin: "10px", width: "180px", color:"#a2a2a2", backgroundColor: "white"}}>
            <div style={{textAlign: "center", margin: "0 auto", padding: "10px"}}><i style={{fontSize: "130px"}} class="fas fa-file-alt"></i></div>
                <p style={{fontSize: "30px", textAlign: "center"}}>Orders</p>
            </div>
            </Link>


            <Link to="/reviews" style={{textDecoration: "none"}}>    
            <div  style={{height: "200px", margin: "10px", width: "180px", color:"#a2a2a2", backgroundColor: "white"}}>
            <div style={{textAlign: "center", margin: "0 auto", padding: "10px"}}><i style={{fontSize: "130px"}} class="fas fa-star"></i></div>
                <p style={{fontSize: "30px", textAlign: "center"}}>Reviews</p>
            </div>
            </Link>

            <Link to="/products" style={{textDecoration: "none"}}>
            <div  style={{height: "200px", margin: "10px", width: "180px", color:"#a2a2a2", backgroundColor: "white"}}>
            <div style={{textAlign: "center", margin: "0 auto", padding: "10px"}}><i style={{fontSize: "130px"}} class="fas fa-columns"></i></div>
                <p style={{fontSize: "30px", textAlign: "center"}}>Products</p>
            </div>
            </Link>

            <Link to="/graphs" style={{textDecoration: "none"}}>
            <div  style={{height: "200px", margin: "10px", width: "180px", color:"#a2a2a2", backgroundColor: "white"}}>
            <div style={{textAlign: "center", margin: "0 auto", padding: "10px"}}><i style={{fontSize: "130px"}} class="fas fa-signal"></i></div>
                <p style={{fontSize: "30px", textAlign: "center"}}>Graphs</p>
            </div>
            </Link>
        </div>
    </Card>
    </>
);

export default Dashboard; 