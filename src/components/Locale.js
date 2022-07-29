import React from 'react';
import Button from './Button';
import CallToAction from './CallToAction';
import Main from './Main';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';

export default function Locale() {
  function locSlz() {
    window.location.href = 'https://goo.gl/maps/LZSum4rv1Pui2JXY7';
  }

  function locItz() {
    window.location.href = 'https://goo.gl/maps/Ge2b5JC4vHQm63FUA';
  }

  function locGru() {
    window.location.href = 'https://goo.gl/maps/xJ9D2UYwKnoz8FX6A';
  }

  return (
    <div>
      <Main>
        <CallToAction title="Localizações" text="Venha nos visitar!" />
        <Button textContent="São Luis - MA" onClickButton={locSlz} />
        <Button textContent="Imperatriz - MA" onClickButton={locItz} />
        <Button textContent="Guarulhos - SP" onClickButton={locGru} />
        <Link to="/notFound">
          <Button textContent="Brasília - DF" />
        </Link>

        <Link to="/">
          <Button textContent="Voltar" />
        </Link>
      </Main>
    </div>
  );
}
