// React
import { Link } from "react-router-dom";

// stylesheet
import style from "./style.css"

// img
import logo from "../../img/logo.svg"

import styled from "styled-components";
import { useState } from "react";



export default function Header({probs}) {
  console.log(probs)
      // styled-component
      const DivProfil = styled.div`
      color: white;
        &:hover {
          color: blue;
          cursor: pointer;
        }
      `

  const [userId, setUserId] = useState()

  return (
    <header>
      <nav>
        <ul>
          <img src={logo} ></img>
          <li><Link to="/">Accueil</Link></li>
          <li>
            Profil
            <div>
            <DivProfil onClick={() => setUserId('12')} >User 12</DivProfil>
            <DivProfil onClick={() => setUserId('18')} >User 18</DivProfil>
            </div>
          </li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}