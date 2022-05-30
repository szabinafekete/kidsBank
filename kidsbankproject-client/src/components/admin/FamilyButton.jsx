import React, { useState } from "react";
import { useForm } from "react-hook-form";
import add_user from "../../icon/add-user.png";
import axios from "axios";

export const FamilyButton = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successful, setSuccessFul] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = (data) => {
    console.log("kliens oldal: ", data);
    let url = "/client/uj_csaladtag";
    sendData(url, data);
    //reset()
  };

  const sendData = async (url, fdata) => {
    const obj = {
      name: fdata.name,
      birthdate: fdata.birthdate,
      money: fdata.money,
    };
    const resp = await axios.post(url, obj);
    const data = await resp.data;
    console.log(data);

    setMsg(data.message);
    resp.status === 200 ? setSuccessFul(true) : setSuccessFul(false);
  };

  /*Új családtag hozzáadása*/
  /*const AddName = (e) =>{
    setAddName(e.target.value,);
  }*/

  /*A felhasználó által beírt adatok definiálása*/
  /*async function onSubmit (e){
    const obj = {
        name: addName,
        birthday: addBirthday,
        money: addMoney,
      };
  */
  /*Adatok összekapcsolása a szerverrel*/
  /*const url ="/client/uj_csaladtag"
      const resp = await axios.post(url, obj);
      console.log(obj);
}*/

  return (
    <div>
      {/*Új családtag hozzáadása gomb*/}
      <div
        className="w-mc container d-flex justify-content-center align-items-center mt-5 btn bg-orange p-3"
        data-bs-toggle="modal"
        data-bs-target="#add"
      >
        <img className="" src={add_user} alt="add" />
        <span>Új családtag hozzáadása</span>
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
                Családtag hozzáadása
              </h5>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="">Becenév</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                  />
                  <div className="err">
                    {errors.name && <span>A név megadása kötelező</span>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Születési dátum</label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("birthdate", { required: true })}
                  />
                  <div className="err">
                    {errors.age && (
                      <span>A születési dátum megadása kötelező</span>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="">Kezdő tőke</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("money", { required: true })}
                  />
                  <div className="err">
                    {errors.money && (
                      <span>A kezdő tőke megadása kötelező</span>
                    )}
                  </div>
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
                <button type="submit" className="btn bg-purple text-white">
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
