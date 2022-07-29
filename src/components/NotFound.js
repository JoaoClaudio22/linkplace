import React from 'react';
import Button from './Button';
import Main from './Main';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <Main>
        <h1 className="text-5xl">
          Desculpe😰 <br /> Isso não era pra acontecer!
        </h1>
        <h2 className="text-4xl mt-12">Página não encontrada</h2>
        <div className="mt-24">
          <Link to="/">
            <Button textContent="Voltar" />
          </Link>
        </div>
      </Main>
    </div>
  );
}
