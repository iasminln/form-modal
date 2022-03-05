import React, { useState } from "react";
import "../App.css";
import copy from "copy-to-clipboard";

export function FormularioModal() {
  const [formValue, setFormValue] = useState({});
  const [formEnviado, setFormEnviado] = useState(true);
  const [textCopiado, setTextCopiado] = useState(false);
  const [obrigatorio, setObrigatorio] = useState("");
  const [mensagemObrigatorio, setMensagemObrigatorio] = useState("");
  let textCupom = "CUPOM2022"; // aqui você deve definir qual será o texto do cupom de desconto

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setFormEnviado(false);

    console.log(data);
  };

  const copyToClipboard = () => {
    copy(textCupom);
    setTextCopiado(true);
  };

  const formPreenchido = () => {
    if (formValue.name === undefined || formValue.email === undefined) {
      setObrigatorio("*");
      setMensagemObrigatorio(
        "(*) Os campos marcados são de preenchimento obrigatório!"
      );
    }
  };

  const corpoForm = () => {
    return (
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <div className="containerName">
            <label className="formName">
              <span className="spanName">Nome</span>
              <span className="asteriscoObrigatorio">{obrigatorio}</span>
              <input
                required
                className="formInputName"
                type="text"
                name="name"
                value={formValue.name || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <br />

          <div className="containerEmail">
            <label className="formEmail">
              <span className="spanEmail">E-mail</span>
              <span className="asteriscoObrigatorio">{obrigatorio}</span>
              <input
                required
                className="formInputEmail"
                type="email"
                name="email"
                value={formValue.email || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <br />

          <div className="containerCheck">
            <label className="formCheck">
              <input
                className="formInputCheck"
                type="checkbox"
                name="receberOfertas"
                value="true"
                onChange={handleInputChange}
              />
              <span className="spanCheck">
                Desejo receber novas ofertas e promoções por e-mail.
              </span>
            </label>
          </div>

          <br />

          <div className="containerButtonEnviar">
            <button
              className="buttonForm"
              type="submit"
              onClick={formPreenchido}
            >
              Enviar
            </button>

            <span className="mensagemObrigatorio">{mensagemObrigatorio}</span>
          </div>
        </form>
      </div>
    );
  };

  const mensagemCupom = () => {
    return (
      <div className="containerCupom">
        <span className="spanMensagemCupom">Seu cupom é: </span>
        <br />
        <span onClick={copyToClipboard} className="spanCupom">
          {textCupom}
        </span>
        <span className="legendaCupom">
          {textCopiado ? <>Copiado!</> : <>Clique para copiar o cupom.</>}
        </span>
      </div>
    );
  };

  return <>{formEnviado ? <>{corpoForm()}</> : <>{mensagemCupom()}</>}</>;
}
