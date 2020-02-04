import React from "react";

function FileUpload(props) {
  const { field, form } = props;

  const handleChange = e => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myimage");
    imgTag.title = file.name;
    reader.onload = function(event) {
      imgTag.src = event.target.result;
    };
    reader.readAsDataURL(file);
    form.setFieldValue(field.name, file);
  };

  return (
    <div>
      <input
        type={"file"}
        onChange={o => handleChange(o)}
        className={"form-control"}
      />
<<<<<<< HEAD
      <img src={""} alt="" id={"myimage"} style={{ height: 200, width: 300 }} />
=======
      <img src={""} alt="" id={"myimage"} style={{ height: 200, width: 200 }} />
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    </div>
  );
}

export default FileUpload;
