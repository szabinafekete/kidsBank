import React, { Component } from "react";
import axios from 'axios';

export class Registration extends Component {
  /*Felhasználó által beírt adatok módosító props-a*/
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePw1 = this.onChangePw1.bind(this);
    this.onChangePw2 = this.onChangePw2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    /*Az alapértelmezett állapotok meghatározása*/
    this.state = {
      name: "",
      email: "",
      pw1: "",
      pw2: "",
      error: "",
    };
  }

/*Hiba esetén megjelenő üzenet állapotának módosítása*/
  onChangeErrorMessage(error) {
    this.setState({
      error: error,
    });
  }

/*A felhasználónév állapotának módosítása*/
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

/*Az e-mail cím állapotának módosítása*/
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

/*A jelszó állapotának módosítása*/
  onChangePw1(e) {
    this.setState({
      pw1: e.target.value,
    });
  }

/*A jelszó állapotának módosítása*/
  onChangePw2(e) {
    this.setState({
      pw2: e.target.value,
    });
  }

  /*A felhasználó által megadott jelszavak egyezésének vizsgálata*/
  async onSubmit(e) {
    if (this.state.pw1 !== this.state.pw2) {
      this.setState({
        error: 'A két jelszó nem egyezik.',
      });
      return;
    } else {
      this.setState({
        error: '',
      });
    }

  /*A felhasználó által beírt adatok definiálása*/
    e.preventDefault();
    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.pw1,
    };

/*Adatok összekapcsolása a szerverrel*/
    const url=`/client/register_user`;
    await axios.post(url, obj);

    console.log(obj);
  }
  render() {
    return (
      <div className="reg container-md mt-3 mb-3">
        <h3 className="text-center">Regisztráció</h3>
        <div className="boxs d-flex justify-content-center">
          <div className="box d-flex flex-column b-round box-shadow p-4">
            <div className="d-sm-flex">
              <div className="col2 me-3">
                <div className="d-flex flex-column mb-4">
                  <label className="mb-2" htmlFor="username">
                    Add meg a felhasználóneved!
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Felhasználónév"
                    aria-label="username"
                    onChange={this.onChangeName}
                    value={this.state.name}
                  />
                </div>
                <div className="d-flex flex-column mb-4">
                  <label className="mb-2" htmlFor="e-mail">
                    Add meg az e-mail címed!
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="E-mail"
                    aria-label="e-mail"
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                  />
                </div>
              </div>
              <div className="col2">
                <div className="d-flex flex-column mb-4">
                  <label className="mb-2" htmlFor="password">
                    Add meg a jelszavad!*
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Jelszó"
                    aria-label="password"
                    onChange={this.onChangePw1}
                    value={this.state.pw1}
                  />
                </div>
                <div className="d-flex flex-column mb-4">
                  <label className="mb-2" htmlFor="password">
                    Add meg ismét a jelszavad!*
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Jelszó"
                    aria-label="password"
                    onChange={this.onChangePw2}
                    value={this.state.pw2}
                  />
                </div>
              </div>

              {/*<div className="col-12">
                            <div className='d-flex flex-column justify-content-end mb-4'>
                                <label className='mb-2' htmlFor="username">Add meg a felhasználóneved!</label>
                                <input type="text" className="form-control" placeholder="Felhasználónév" aria-label="username"/>
                            </div>
                            <div className='d-flex flex-column justify-content-end mb-4'>
                                <label className='mb-2' htmlFor="e-mail">Add meg az e-mail címed!</label>
                                <input type="password" class="form-control" placeholder="E-mail" aria-label="e-mail"/>
                            </div>
                            <div className='d-flex flex-column justify-content-end mb-4'>
                                <label className='mb-2' htmlFor="password">Add meg a jelszavad!*</label>
                                <input type="text" className="form-control" placeholder="Jelszó" aria-label="password"/>
                            </div>
                            <div className='d-flex flex-column justify-content-end'>
                                <label className='mb-2' htmlFor="password">Add meg még egyszer a jelszavad!*</label>
                                <input type="password" className="form-control" placeholder="Jelszó" aria-label="password"/>
                            </div>
                        </div>*/}
            </div>
            <div>
              <p className="text-muted fs-small">
                *Legalább 8 karaktert használjon, és szerepeljenek köztük betűk,
                számok és szimbólumok is.
              </p>
              {/*Hibaüzenet megjelenítése*/}
              <p className="password error">{this.state.error}</p>
              <div className="text-center">
                <button
                  className="btn bg-purple text-white"
                  onClick={this.onSubmit}
                >
                  Regisztrálok!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
