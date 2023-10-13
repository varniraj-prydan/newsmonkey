import React, { Component } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes

} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="in/" element={
              <News key="general" category="general" country="in" />
            } >
            </Route>
            <Route exact path="in/business" element={
              <News key="business" category="business" country="in" />
            } >
            </Route>
            <Route exact path="in/entertainment" element={
              <News key="entertainment" category="entertainment" country="in" />
            } >
            </Route>
            <Route exact path="in/health" element={
              <News key="health" category="health" country="in" />
            } >
            </Route>
            <Route exact path="in/science" element={
              <News key="science" category="science" country="in" />
            } >
            </Route>
            <Route exact path="in/sports" element={
              <News key="sports" category="sports" country="in" />
            } >
            </Route>
            <Route exact path="in/technology" element={
              <News key="technology" category="technology" country="in" />
            } >
            </Route>

            <Route exact path="us/" element={
              <News key="generalUs" category="general" country="us" />
            } >
            </Route>
            <Route exact path="us/business" element={
              <News key="businessUs" category="business" country="us" />
            } >
            </Route>
            <Route exact path="us/entertainment" element={
              <News key="entertainmentUs" category="entertainment" country="us" />
            } >
            </Route>
            <Route exact path="us/health" element={
              <News key="healthUs" category="health" country="us" />
            } >
            </Route>
            <Route exact path="us/science" element={
              <News key="scienceUs" category="science" country="us" />
            } >
            </Route>
            <Route exact path="us/sports" element={
              <News key="sportsUs" category="sports" country="us" />
            } >
            </Route>
            <Route exact path="us/technology" element={
              <News key="technologyUs" category="technology" country="us" />
            } >
            </Route>
          </Routes>
        </div>
      </Router>

    )
  }
}
