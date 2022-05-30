import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../icon/edit.png";
import remove from "../../icon/remove.png";

export const Bank = () => {
  const [bank, setBank] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  /*Adatok összekapcsolása a szerverrel*/
  const fetchData = async () => {
    const url = "/admin/befektetes";
    const resp = await axios.get(url);
    const data = resp.data;
    setBank(data);
  };

  return (
    <div className="container-md">
      {/*A bank tábla adatainak megjelenítése táblázatban*/}
      <table className="table table-striped">
        <thead className="">
          <tr>
            <th scope="col">Becenév</th>
            <th scope="col">Befektetés megnevezése</th>
            <th scope="col">Napok száma</th>
            <th scope="col">Befektetett pontok</th>
            <th scope="col">Hozam</th>
            <th scope="col">Pontok a lejáratkor</th>
            <th scope="col">Lejárat ideje</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {bank.map((obj, i) => (
            <tr key={i}>
              <td>{obj.befektetes_id}</td>
              <td>{obj.megnevezes}</td>
              <td>{obj.napok}</td>
              <td>{obj.osszeg}</td>
              <td>{obj.hozam}</td>
              <td>{obj.varhato_penz}</td>
              <td>{obj.lejarat}</td>
              <td>
                {" "}
                {/*Az adatok szerkesztésére szolgáló gombok*/}
                <img className="me-3" src={edit} alt="edit" />
                <img className="" src={remove} alt="remove" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*Új befektetés hozzáadása gomb*/}
      <div
        className="w-mc container d-flex justify-content-center align-items-center mt-5 btn bg-orange p-3"
        data-bs-toggle="modal"
        data-bs-target="#add"
      >
        <span>Befektetés hozzáadása</span>
      </div>
      {/*Az adatok módosítására szolgáló felugró modal*/}
      <div
        className="modal fade"
        id="add"
        aria-labelledby="addLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addLabel">
                Befektetés hozzáadása
              </h5>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="">Becenév</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Befektetés megnevezése</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Befektetés időtartama</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Válassz a lehetőségek közül!</option>
                    <option value="7">7 nap</option>
                    <option value="14">14 nap</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="">Befektetett pont összege</label>
                  <input type="number" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Bezárás
                </button>
                <button type="button" className="btn bg-purple text-white">
                  Mentés
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
