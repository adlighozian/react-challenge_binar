import React, { useState } from "react";
import axios from "axios";

import SidebarDashboard from "../components/sidebarDashboard";
import NavbarDashboard from "../components/navbarDashboard";

import "../../assets/css/layouts/addcar.css";

function Addcar() {
  const url = "";
  const [data, setData] = useState({
    name: "",
    harga: "",
    foto: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        harga: data.harga,
        foto: data.foto,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <section className="addcar d-flex">
      <div className="left">
        {/* SIDEBAR_START */}
        <SidebarDashboard />
        {/* SIDEBAR_END */}
      </div>
      <div className="right">
        {/* NAVBAR_START */}
        <NavbarDashboard />
        {/* NAVBAR_END */}
        {/* MAIN_START */}
        <div className="main">
          <div className="top"></div>
          <div className="body d-flex flex-column">
            <p className="p1">Add New Car</p>
            <div className="box d-flex flex-column">
              <form
                className="d-flex flex-column align-items-start just"
                onSubmit={(e) => submit(e)}
              >
                <div className="formin">
                  <label>nama</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="name"
                    value={data.name}
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div className="formin">
                  <label>Harga</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="harga"
                    value={data.harga}
                    placeholder="harga"
                    type="text"
                  />
                </div>
                <div className="formin">
                  <label>foto</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="foto"
                    value={data.foto}
                    placeholder="foto"
                    type="text"
                  />
                </div>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
        {/* MAIN_END */}
      </div>
    </section>
  );
}

export default Addcar;
