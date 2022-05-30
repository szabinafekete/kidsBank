import React, {useState, useEffect} from 'react';
import axios from 'axios';
import edit from '../../icon/edit.png';
import remove from '../../icon/remove.png';

export const Todo=()=> {
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    fetchData()
},[])

/*Adatok összekapcsolása a szerverrel*/
const fetchData = async ()=>{
    const url=`/admin/feladatok`
    const resp = await axios.get(url)
    const data = resp.data
    setTodos(data)
  }

  return (
    <div className='container-md'>
      {/*A feladatok tábla adatainak megjelenítése táblázatban*/}
      <table className="table table-striped">
        <thead className="">
            <tr>
            <th scope="col">Becenév</th>
            <th scope="col">Feladat neve</th>
            <th scope="col">Határidő</th>
            <th scope="col">Pont</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {todos.map((obj, i)=>
                            <tr  key={i}>
                                <td>{obj.felhasznalo_id}</td>
                                <td>{obj.megnevezes}</td>
                                <td>{obj.hatarido}</td>
                                <td>{obj.pont}</td>
                                <td>
                                    <img className="me-3" src={edit} alt="edit" />
                                    <img className="" src={remove} alt="remove" />
                                </td>
                            </tr>

                        )}
        </tbody>
      </table>  
      {/*Új feladat hozzáadása gomb*/}
      <div className="w-mc container d-flex justify-content-center align-items-center mt-5 btn bg-orange p-3" data-bs-toggle="modal" data-bs-target="#add">
          <span>Feladat hozzáadása</span>
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
                          <label htmlFor="">Feladat neve</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="">Határidő</label>
                          <input type="date" className="form-control" />
                      </div>
                      <div className="mb-2">
                          <label htmlFor="">Pont</label>
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