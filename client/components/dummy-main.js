import React from 'react'
import {Link} from "react-router-dom";

const DummyMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/55708853-81a3-4335-8f4d-7c8ac9cabe18">Go To Profile</Link><br />
      <Link to="/dashboard">Go To Root</Link><br />

    </div>
  )
}

DummyMain.propTypes = {}

export default DummyMain
