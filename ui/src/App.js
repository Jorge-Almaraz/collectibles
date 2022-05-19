import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Reports from "./views/Reports";
import Users from "./views/Users";
import Comics from "./views/Comics";
import Figures from "./views/Figures";
import Games from "./views/Games"
import React from "react";
import { getToken } from "./utils/session"


export default class App extends React.Component {
  render() {
    const token = getToken()
    if (!token) return <Login />
    return (
      <BrowserRouter>
        <Header />
        <br/>
        <Container>
          <Routes>
            <Route path="/" element={<Reports />}></Route>
            <Route path="/users" element={<Users />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/figures" element={<Figures />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}