import React from 'react'
import { Link } from 'react-router-dom'

const DummyDashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/55708853-81a3-4335-8f4d-7c8ac9cabe18">Go To Profile</Link><br />
      <Link to="/dashboard/main">Go To Main</Link><br />
    </div>
  )
}

DummyDashboard.propTypes = {}

export default DummyDashboard
