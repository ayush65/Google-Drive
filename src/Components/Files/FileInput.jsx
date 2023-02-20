import React, { useEffect, useState } from "react";
import "./FilesInput.css";

function ImageComponent(props) {
  const fileType = props.type.split(".");

  return (
    <img
      src={
        fileType[1] === "docx"
          ? "data:image/png;base64,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"
          : fileType[1] === "pdf"
          ? "https://play-lh.googleusercontent.com/e55DvXjInKqidphgSLajmUe7Q4daDDTs0EV_z83-mXpP1OEfPUDJgerz1Uu9z1UQr0A"
          : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
      }
      alt={fileType[1] ? `Image ${fileType[1]}` : "Default Image"}
      className={props.className}
    />
  );
}

function FileInputs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);

  function handleCloseModal() {
    setIsModalOpen(false);
    setUrl("");
  }

  const [base64, setBase64] = useState("");


  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      const selectedFiles = event.target.files;
      const newFiles = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        base64: base64String,
      }));
      setFiles([...files, ...newFiles]);

      localStorage.setItem("files", JSON.stringify([...files, ...newFiles]));

      setIsModalOpen(false);
      setBase64(base64String);
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const [url, setUrl] = useState("");

  const handleUrl = async (file) => {
    console.log(file);
    const fileType = file.name.split(".");

    console.log(fileType[1]);

    if (fileType[1] === "doc" || fileType[1] === "docx") {
      const url = `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${base64}`;
      setUrl(url);
    } else if (fileType[1] === "pdf") {
      const url = `data:application/pdf;base64,${base64}`;
      setUrl(url);
    } else {
      const url = `data:image/jpeg;base64,${base64}`;
      setUrl(url);
    }
    setIsModalOpen(true);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("files"));
    if (storedItems) {
      setItems(storedItems);
      setFiles(storedItems)
    }
  }, [files]);

  return (
    <div className="input-container">
      <p className="folder-content">Folders</p>
      <input
        className="btn-files"
        type="file"
        accept="*"
        onChange={(e) => {
          handleFileChange(e);
          handleFileUpload(e);
        }}
      />
      <button className="button">Upload File</button>
      {isModalOpen ? (
        <div className="modal-container">
          {" "}
          <iframe src={url} width="100%" height="400px"></iframe>
          <button onClick={handleCloseModal} className="model-btn">
            Close Modal
          </button>
        </div>
      ) : null}

      <div>
        {items.length > 0 ? (
          <div className="files-container">
            {items.map((item) => {
              return (
                <div
                  onClick={() => handleUrl(handleUrl(item))}
                  className="files-div"
                  style={{ backgroundImage: `url(${item.base64})` }}
                >
                  <img
                    src="https://st2.depositphotos.com/3894705/9125/i/450/depositphotos_91250974-stock-photo-tablecloth-background-light-gray.jpg"
                    alt=""
                    className="file-main-img"
                  />

                  <div className="files-flex">
                    {" "}
                    <div>
                      {" "}
                      <ImageComponent type={item.name} className="file-img" />
                    </div>
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FileInputs;
