import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../icon/edit.png";
import remove from "../../icon/remove.png";

export const FamilyTable = () => {
  const [members, setMembers] = useState([]);
  /*const [modify, setModify] = useState(false);*/

  useEffect(() => {
    fetchData();
  }, []);

  /*Adatok összekapcsolása a szerverrel*/
  const fetchData = async () => {
    const url = "/admin/csaladtagok";
    const resp = await axios.get(url);
    const data = resp.data;
    setMembers(data);
  };

  return (
    <div className="container-md">
      {/*A felhjasznalo tábla adatainak megjelenítése táblázatban*/}
      <table className="table table-striped">
        <thead className="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Becenév</th>
            <th scope="col">Kor</th>
            <th scope="col">Pénz</th>
            <th scope="col" /*className={!modify ? "d-none" : ""}*/></th>
          </tr>
        </thead>
        <tbody>
          {members.map((obj, i) => (
            <tr key={i}>
              <th scope="row">{obj.id}</th>
              <td>{obj.becenev}</td>
              <td>{obj.kor}</td>
              <td>{obj.penz} Ft</td>
              <td /*className={modify ? "d-none" : null}*/>
                <img className="me-3" src={edit} alt="edit" />
                <img className="" src={remove} alt="remove" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
