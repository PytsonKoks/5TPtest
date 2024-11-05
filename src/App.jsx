import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <form className="d-flex flex-column w-100 align-items-center justify-content-center">
            <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" ></input>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"></input>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
    </>
  )
}

export default App
