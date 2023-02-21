import React, { useEffect, useState } from "react";
import "./FolderComponent.css";

function FolderComponent() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("please provide proper details");
    } else {
      const newItem = {
        id: Date.now(),
        value: inputValue,
      };
      setItems([...items, newItem]);

      localStorage.setItem("folders", JSON.stringify([...items, newItem]));
      setInputValue("");
    }
  };

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("folders"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, [items]);

  return (
    <div className="folder-container">
      <p className="folder-content">Folders</p>
      <div>
        <button className="button" onClick={() => setIsModalOpen(true)}>
          Create folder
        </button>
      </div>

      <ul>
        {isModalOpen ? (
          <div>
            {" "}
            <form onSubmit={handleSubmit} className="modal-container">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Write Folder Name here"
                className="model-content model-input"
              />
              <button type="submit" className="model-content model-btn">
                Add Folder
              </button>
              <button
                onClick={handleCloseModal}
                className="model-content model-btn"
              >
                Close Modal
              </button>
            </form>
          </div>
        ) : null}
        <div className="folders-container">
          {items.map((item) => (
            <div className="items-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MvQSzetasIxa6gU-ExEPUnR-yzUFJxDp0QIj3cE4YcWm2uQsrQOvuvMvpvkhJTSuMQQ&usqp=CAU"
                alt=""
                className="img-item"
              />
              <li key={item.id}>{item.value}</li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default FolderComponent;
