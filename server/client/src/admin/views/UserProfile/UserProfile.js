import React, { useContext, useState, useEffect } from "react";
// @material-ui/core components
import {
  grayColor,
  defaultFont
} from "../../assets/jss/material-dashboard-react";
import "../../../css/materialize.css";
// import Dropzone from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import { TextField } from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// import { validateUpdateForm } from "../../../components/form/validate";
import avatar from "../../assets/img/faces/marc.jpg";
import AdminContext from "../../../components/context/adminAPI/adminContext";
//import FileUploads from "../../utils/FileUploads";

const useStyles = makeStyles(theme => ({
  textField: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset",
    ...defaultFont,
    color: grayColor[3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    width: "100%"
  },
  button: {
    margin: theme.spacing(1)
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}));

// const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const adminContext = useContext(AdminContext);
  const { addUsers, deleteUser, error } = adminContext;

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    title: "",
    phone: "",
    password: "",
    description: "",
    formData: "",
    loading: false
  });

  const init = () => {
    setValues({
      ...values,
      formData: new FormData()
    });
  };

  useEffect(() => {
    init();
    //eslint-disable-next-line
  }, []);

  const {
    formData,
    firstname,
    lastname,
    email,
    password,
    phone,
    title,
    description
  } = values;

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    // console.log(event.target.value);
    //let formData = new FormData();
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, loading: true });

    addUsers(formData).then(err => {
      if (err) {
        setValues({ ...values, error: err });
      } else {
        setValues({
          ...values,
          firstname: "",
          lastname: "",
          email: "",
          title: "",
          phone: "",
          photo: "",
          password: "",
          description: "",
          formData: "",
          loading: false
        });
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>

            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="firstname"
                    value={firstname}
                    onChange={handleChange("firstname")}
                    label="First name"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="lastname"
                    value={lastname}
                    onChange={handleChange("lastname")}
                    label="Last name"
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    label="Email address"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="password"
                    value={password}
                    onChange={handleChange("password")}
                    label="Password"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                    label="Phone number"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel style={{ color: "#AAAAAA" }}>
                    File Upload
                  </InputLabel>
                  <Button containerelement="label" label="File upload">
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange("photo")}
                    />
                  </Button>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    className={classes.textField}
                    id="title"
                    value={title}
                    type="text"
                    onChange={handleChange("title")}
                    label="Title"
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    className={classes.textField}
                    id="aboutMe"
                    type="text"
                    value={description}
                    onChange={handleChange("description")}
                    label="Description"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Canterbury Music Teacher</h6>
              <h4 className={classes.cardTitle}></h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
    </form>
  );
}

// // inputProps={{
//   multiline: true,
//   rows: 2
// }}//
// const showUploadedImages = () => {
//   return values.map(user => (
//     <Button
//       className="dropzone_box"
//       key={user.id}
//       onClick={() => deleteUser(user.id)}
//     >
//       <div
//         className="wrap"
//         style={{ background: `url(${user.photo}) no-repeat` }}
//       ></div>
//     </Button>
//   ));
// };
// showUploadedData = () => {
//   <GridItem xs={12} sm={12} md={4}>
//     values.map(userData => (
//     <div key={userData.id} onClick={() => deleteUser(userData.id)}>
//       Delete Data
//     </div>
//     <Card profile>
//       <CardAvatar profile>
//         <a href="#pablo" onClick={e => e.preventDefault()}>
//           <img src={avatar} alt="..." />
//         </a>
//       </CardAvatar>
//       <CardBody profile>
//         <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
//         <h4 className={classes.cardTitle}>Alec Thompson</h4>
//         <p className={classes.description}>
//           Don{"'"}t be scared of the truth because we need to restart the
//           human foundation in truth And I love you like Kanye loves Kanye I
//           love Rick Owens’ bed design but the back is...
//         </p>
//         <Button color="primary" round>
//           Follow
//         </Button>
//       </CardBody>
//     </Card>
//     ));
//   </GridItem>;
// };

// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required()
//     .max(10),
//   lastName: Yup.string()
//     .required()
//     .max(10),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Required")
// });

// return (
//   <Formik
//     enableReinitialize={true}
//     initialValues={values}
//     onSubmit={onSubmit}
//     validationSchema={validationSchema}
//     onChnage={handleChange}
//   >
//     {({ onSubmit, handleChange, values }) => (
//       <form onSubmit={onSubmit}>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={8}>
//             <Card>
//               <CardHeader color="primary">
//                 <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
//                 <p className={classes.cardCategoryWhite}>
//                   Complete your profile
//                 </p>
//               </CardHeader>
//               <CardBody>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={6}>
//                     <TextField
//                       className={classes.textField}
//                       name="firstname"
//                       value={values.firstname}
//                       onChange={handleChange("firstname")}
//                       label="First name"
//                     />

/* <GridItem xs={12} sm={12} md={6}>
                  <i class="material-icons prefix">account_circle</i>
                  <InputLabel style={{ color: "#AAAAAA" }}>
                    First Name
                  </InputLabel>
                  <input
                    id="icon_prefix"
                    type="text"
                    class="validate"
                    name="firstname"
                    value={firstname}
                    onChange={handleChange("firstname")}
                    label="First name"
                  ></input> */

/* <CustomInput
                    labelText="First Name"
                    id="firstName"
                    value={firstname}
                    type="text"
                    name="firstname"
                    onChange={hChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  /> 
}
{
  /* </GridItem> */

/* <GridItem xs={12} sm={12} md={6}>
                {/* <CustomInput
                    labelText="Last Name"
                    id="lastName"
                    type="text"
                    value={lastname}
                    onChange={handleChange("lastname")}
                    formControlProps={{
                      fullWidth: true
                    }}
                  /> */

/* <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="firstname"
                    value={firstname}
                    onChange={handleChange("firstname")}
                    label="First name"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="lastname"
                    value={lastname}
                    onChange={handleChange("lastname")}
                    label="Last name"
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    className={classes.textField}
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    label="Email address"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                
               
                  <TextField
                    className={classes.textField}
                    name="password"
                    value={password}
                    onChange={handleChange("password")}
                    label="Password"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                
                  <TextField
                    className={classes.textField}
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                    label="Phone number"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Button containerelement="label" label="File upload">
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange("photo")}
                    />
                  </Button>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={11}>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    value={title}
                    type="text"
                    onChange={handleChange("title")}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Tell me about yourself"
                    id="aboutMe"
                    type="text"
                    value={description}
                    onChange={handleChange("description")}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>  */
