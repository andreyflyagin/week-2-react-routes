import React from 'react'
import {Link, useParams} from 'react-router-dom'

const Dummy = () => {
  const {userId} =  useParams()
  return (
    <div>
      <div id="title">Profile</div>
      <Link to="/dashboard">Go To Root</Link><br />
      <Link to="/dashboard/main">Go To Main</Link><br />
      <div id="username">{userId}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
