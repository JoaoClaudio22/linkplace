import React from 'react';
import Main from './Main';
import ShowImage from './ShowImage';
import CallToAction from './CallToAction';
import Container from './Container';
import Button from './Button';
import Logov from '../img/logo-rodosul2.png';

import { Link } from 'react-router-dom';

export default function MainContent() {
  function handleClickButtonCtt() {
    window.location.href =
      'https://api.whatsapp.com/send?phone=5598988661001&text=Ola!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida';
  }

  function handleClickButtonSite() {
    window.location.href = 'https://www.rodosul.com/';
  }

  return (
    <div>
      <Main>
        <ShowImage urlImg={Logov} />
        <CallToAction title="Grupo Rodosul" text="Faça seu orçamento" />
        <Container>
          <Button
            onClickButton={handleClickButtonSite}
            textContent="Nosso site"
          />
          <Button onClickButton={handleClickButtonCtt} textContent="WhatsApp" />
          <Link to="/localizacao">
            <Button textContent="Localizações" />
          </Link>
        </Container>
      </Main>
    </div>
  );
}
