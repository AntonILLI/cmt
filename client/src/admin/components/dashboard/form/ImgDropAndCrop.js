//drop drag image component with review image as well as crop image
import React, { useState, useEffect, useCallback } from "react";
import ReactCrop from "react-image-crop";
import Dropzone from "react-dropzone";
import "react-image-crop/dist/ReactCrop.css";
import { withPreviews, clearPreviews } from "./With-previews";

import styled from "styled-components";

function ImgDropAndCrop() {
  const [files, setFiles] = useState([]);
  const [crop, setCrop] = useState({
    aspect: 16 / 9,
    unit: "%",
    width: 60,
    height: 40
  });

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

  const DropContainer = styled.div`
    display: flex;
    width: 500px;
    flex-direction: row;
    align-items: center;
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
            <input {...getInputProps()} />
            <i className="fas fa-image fa-3x"></i>
            Drop Image
            {files.map(file => (
              <ReactCrop
                style={{ maxWidth: 200, maxHeight: 200, display: "block" }}
                src={file.preview}
                crop={crop}
                onChange={newCrop => setCrop(newCrop)}
              />
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

export default ImgDropAndCrop;

// import React, { useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: "border-box"
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden"
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%"
// };

// function ImgDropAndCrop(props) {
//   const [files, setFiles] = useState([]);
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject
//   } = useDropzone({
//     accept: "image/*",
//     onDrop: acceptedFiles => {
//       setFiles(
//         acceptedFiles.map(file =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file)
//           })
//         )
//       );
//     }
//   });

//   // const clearPreview = files =>
//   //   files.forEach(file => URL.revokeObjectURL(file.preview));

//   const thumbs = files.map(file => (
//     <ReactCrop style={thumb} key={file.name}>
//       <div style={thumbInner}>
//         <img src={file.preview} style={img} />
//         onChange={newCrop => setCrop(newCrop)}
//       </div>
//     </ReactCrop>
//   ));

//   useEffect(
//     () => () => {
//       // Make sure to revoke the data uris to avoid memory leaks
//       files.forEach(file => URL.revokeObjectURL(file.preview));
//     },
//     [files]
//   );

//   return (
//     <section className="container">
//       <div {...getRootProps({ className: "dropzone" })}>
//         <input {...getInputProps()} />
//         <i styled={{ color: "black" }} className="fas fa-image fa-3x"></i>
//         Drop Image
//         <button
//           onClick={() => {
//             setFiles([]);
//           }}
//         >
//           reset
//         </button>
//       </div>
//       <ReactCrop style={thumbsContainer}>{thumbs}</ReactCrop>
//     </section>
//   );
// }

//export default ImgDropAndCrop;
