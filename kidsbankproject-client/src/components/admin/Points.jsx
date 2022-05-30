import React, {useState, useEffect} from 'react';
import axios from 'axios';
import edit from '../../icon/edit.png';
import remove from '../../icon/remove.png';

export const Points=()=> {
  const [points, setPoints] = useState([]);

  useEffect(()=> {
    fetchData()
},[])

/*Adatok összekapcsolása a szerverrel*/
const fetchData = async ()=>{
    const url=`/admin/jutalmak`
    const resp = await axios.get(url)
    const data = resp.data
    setPoints(data)
  }

  return (
    <div className='container-md'>
      {/*A jutalmak tábla adatainak megjelenítése táblázatban*/}
      <table className="table table-striped">
        <thead className="">
            <tr>
            <th scope="col">Becenév</th>
            <th scope="col">Jutalom megnevezése</th>
            <th scope="col">Szükséges pont</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {points.map((obj, i)=>
                            <tr key={i}>
                                <td>{obj.jutalmak_id}</td>
                                <td>{obj.megnevezes}</td>
                                <td>{obj.szukseges_pont}</td>
                                <td>
                                  <button type="button" className="btn bg-purple text-white">Beváltás</button>
                                </td>
                                <td>
                                    <img className="me-3" src={edit} alt="edit" />
                                    <img className="" src={remove} alt="remove" />
                                </td>
                            </tr>
                        )}
        </tbody>
      </table>  
      {/*Új jutalom hozzáadása gomb*/}
      <div className="w-mc container d-flex justify-content-center align-items-center mt-5 btn bg-orange p-3" data-bs-toggle="modal" data-bs-target="#add">
          <span>Jutalom hozzáadása</span>
      </div>
      {/*Az adatok módosítására szolgáló felugró modal*/}
      <div className="modal fade" id="add" aria-labelledby="addLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="addLabel">Feladat hozzáadása</h5>
              </div>
              <form>
                  <div className="modal-body">
                      <div className="mb-3">
                          <label htmlFor="">Becenév</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="">Jutalom megnevezése</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="mb-2">
                          <label htmlFor="">Szükséges pont</label>
                          <input type="number" className="form-control" />
                      </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
                      <button type="button" className="btn bg-purple text-white">Mentés</button>
                  </div>
              </form>
              </div>
          </div>
      </div>
    </div>
  )
}