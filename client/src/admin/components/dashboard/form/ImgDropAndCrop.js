//drop drag image component with review image as well as crop image
import React, { useState, useEffect, useCallback } from "react";
// import ReactCrop from "react-image-crop";
import Dropzone from "react-dropzone";
import "react-image-crop/dist/ReactCrop.css";
import { withPreviews, clearPreviews } from "./With-previews";
import FileUpload from "./FileUpload";
import styled from "styled-components";

function ImgDropAndCrop() {
  const [files, setFiles] = useState([]);
  // const [crop, setCrop] = useState({
  //   aspect: 16 / 9,
  //   unit: "%",
  //   width: 60,
  //   height: 40
  // });

  useEffect(() => () => clearPreviews(files), [files]);

  const handleDrop = useCallback(accepted =>
    setFiles(files => [...files, ...accepted])
  );

  const getColor = props => {
    if (props.isDragAccept) {
      return "#00e676";
    }
    if (props.isDragReject) {
      return "#ff1744";
    }
    if (props.isDragActive) {
      return "#2196f3";
    }
    return "#ffa31a";
  };

  const Container = styled.div`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  `;

  // const SmallButton = styled.button``
  // const ReviewImage = styled.img``
  return (
    <>
      <Dropzone
        multiple={false}
        onDrop={withPreviews(handleDrop)}
        style={{ width: "300", hegith: "300" }}
      >
        {({
          getRootProps,
          getInputProps,
          isDragAccept,
          isDragActive,
          isDragReject
        }) => (
          <Container
            {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
          >
            <input maxFiles={1} multiple={false} {...getInputProps()} />
            <i className="fas fa-image fa-3x"></i>
            Drop Image
            {files.map(file => (
              <MyImg src={file.preview} />
            ))}
          </Container>
        )}
      </Dropzone>
      <button
        className="browser-default"
        onClick={() => {
          clearPreviews(files);
          setFiles([]);
        }}
      >
        Clear image and preview
      </button>
    </>
  );
}

const MyImg = styled.img`
  display: inline;
  height: 150px;
  width: 150px;
`;

export default ImgDropAndCrop;
