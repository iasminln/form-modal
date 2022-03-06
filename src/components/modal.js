import React from "react";
import "../App.css";
import imagemBolsa from "../images/imagem-bolsa.jpg";
import imagemBolsaMobile from "../images/imagem-bolsa-mobile.jpg";
import { FormularioModal } from "./formulario";

const Modal = ( {onClose} ) => {
  const src = window.innerWidth > 900 ? imagemBolsa : imagemBolsaMobile;

  function clickButton() {
    onClose(false);
  }

  return (
    <div
      className="modal"
      onClick={clickButton}
    >
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="contentBody">
          <div className="contentLeft">
            <img className="imageModal" src={src} />
          </div>
          <div className="contentRight">
            <div className="containerButton">
              <button className="closeButton" onClick={clickButton} />
            </div>

            <div className="containerConteudo">
              <div className="containerTexto">
                <p className="titulo">
                  Parabéns! Você acaba de ganhar um cupom de desconto.
                </p>
                <p className="legenda">
                  Preencha com seu nome e e-mail para ter acesso ao seu código
                  de desconto.
                </p>
              </div>
              <br />
              <FormularioModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
