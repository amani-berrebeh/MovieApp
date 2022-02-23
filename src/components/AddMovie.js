import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AddMovie = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
 
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      AddMovie
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>Add a new movie</div>
        <form>
          <label> Title:</label> <input type="text" placeholder="... title" />{" "}
          <br />
          <label> Description:</label>
          <input type="text" />
          <br />
          <label> Poster:</label>
          <input type="text" /> <br />
          <label> Rating:</label>
          <br />
          <button>submit</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default AddMovie;
