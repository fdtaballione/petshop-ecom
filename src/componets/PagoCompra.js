import React from "react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import { useState } from "react";

const PagoCompra = (props) => {
  const [estadoModal, setEstadoModal] = useState(false);

  const onClose = () => {
    props.setEstadoModal(false);
  };

  return (
    <>
      <React.Fragment>
        <Modal
          show={props.estadoModal}
          size="md"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={() => props.confirmarPago()}>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Pago de la compra
                </h3>
                <h2>Total = {props.total}</h2>
                <div className="flex">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="apellido" value="Apellido" />
                    </div>
                    <TextInput
                      id="apellido"
                      placeholder="García"
                      required={true}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="nombre" value="Nombres" />
                    </div>
                    <TextInput
                      id="nombre"
                      placeholder="Juan Pablo"
                      required={true}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="dni" value="DNI" />
                  </div>
                  <TextInput
                    id="dni"
                    placeholder="Tal cual aparece en la tarjeta"
                    required={true}
                    pattern="[0-9]{8}"
                  />
                </div>
                <div className="flex">
                  <div className="w-2/3">
                    <div className="mb-2 block">
                      <Label htmlFor="nroTarjeta" value="Nro. Tarjeta" />
                    </div>
                    <TextInput
                      id="nroTarjeta"
                      placeholder="0000-0000-0000-0000"
                      required={true}
                      pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                    />
                  </div>
                  <div className="w-1/3">
                    <div className="mb-2 block">
                      <Label htmlFor="vtoTarjeta" value="Fecha de Vto." />
                    </div>
                    <TextInput
                      id="vtoTarjeta"
                      placeholder="MM/YY"
                      required={true}
                      pattern="[0-9]{2}/[0-9]{2}"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Código de verificación" />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    required={true}
                    pattern="[0-9]{3}"
                  />
                </div>

                <div className="flex">
                  <div className="w-full">
                    <Button type="submit">Confirmar Pago</Button>
                  </div>
                  <div className="w-full">
                    <Button onClick={() => onClose()}>Cancelar</Button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default PagoCompra;
