import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import DummyMain from './dummy-main'
import DummyDashboard from './dummy-dashboard'
import DummyProfile from './dummy-profile'


const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <DummyDashboard />} />
            <Route exact path="/dashboard/main" component={() => <DummyMain />} />
            <Route exact path="/dashboard/profile/:userId" component={() => <DummyProfile />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
