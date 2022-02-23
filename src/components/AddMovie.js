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
const AddMovie = ({ handleFilmp }) => {
const [modalIsOpen, setIsOpen] = React.useState(false);
const [form, setForm] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  //fonction handlechange
  function handlechange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleFilmp({ ...form, id: Math.random() });
    setForm({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    });
    closeModal();
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
        <form onSubmit={handleSubmit}>
        <label> Title:</label>{" "}
        <input
            onChange={handlechange}
            type="text"
            placeholder="... title"
            name="title"
            value={form.title}
        />{" "}
        <br />
        <label> Description:</label>
        <input type="text" 
        onChange={handlechange} 
        name="description"
        value={form.description} 
        />
        
        <br />
        <label> Poster:</label>
        <input type="url"
        onChange={handlechange} 
        name="posterURL" 
        value={form.posterURL}
        /> 
        <br />
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
