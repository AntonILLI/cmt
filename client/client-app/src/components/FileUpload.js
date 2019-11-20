import React, { Fragment, useState } from "react";
import Axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    //backend file to append this data
    try {
      const res = await Axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.message);
      }
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <label htmlFor="customFile">{filename}</label>
        <div>
          <input onChange={onChange} type="submit" value="upload"></input>
        </div>
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <h3>{uploadedFile.fileName}</h3>

          <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
