import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useNormasContext } from "../../../hooks/useNormasContext";

export function ModalAddNewExame({ setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { addNewExame, getAllExames } = useNormasContext();

  const [codeExame, setCodeExame] = useState("");
  const [nameNewExame, setNameNewExame] = useState("");

  async function handleAddNewExame() {
    await addNewExame(codeExame, nameNewExame).then(() => {
      getAllExames().then(() => {
        handleCloseModal();
      });
    });
  }

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose onClick={handleCloseModal}>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
          />
        </C.AreaClose>
        <h3>Cadastrar novo Item</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Código"
            onChange={(e) => setCodeExame(e.target.value)}
          />
          <textarea
            rows="5"
            placeholder="Nome do procedimento"
            onChange={(e) => setNameNewExame(e.target.value)}
          ></textarea>
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={handleAddNewExame}
            disabled={nameNewExame && codeExame ? false : true}
          >
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
