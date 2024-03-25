import React from "react";
import { Link } from "react-router-dom";
import bursam from ".././assets/logo.jpg";

function Anasayfa() {
  return (
    <>
      <div class="card mt-5 mb-3">
        <img src={bursam} width="100%" margin="auto" />
        <div className="card-body" style={{ backgroundColor: "red" }}>
        <h5 className="card-title" style={{ color: 'black' }}>Sosyal Tesislerimiz</h5>

          <p className="card-text"> </p>
          <Link className="btn btn-warning btn-md" to="/subeler">
            İncelemek İçin Tıklayınız
          </Link>
        </div>
      </div>
    </>
  );
}

export default Anasayfa;
