// const validator = require("validator");

// const validateLoginForm = data => {
//   const errors = {};
//   let message = "";
//   let isFormValid = true;

//   if (
//     !data ||
//     typeof data.password !== "string" ||
//     data.password.trim().length < 8
//   ) {
//     isFormValid = false;
//     errors.password = "Password must have at least 8 characters.";
//   }

//   if (
//     !data ||
//     typeof data.email !== "string" ||
//     !validator.isEmail(data.email)
//   ) {
//     isFormValid = false;
//     errors.email = "Please provide a correct email address.";
//   }

//   if (!isFormValid) {
//     errors.message = "Check the form for errors.";
//   }

//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// };

// const validateUpdateForm = data => {
//   const errors = {};
//   let message = "";
//   let isFormValid = true;

//   if (
//     !data.firstname ||
//     typeof data.firstname !== "string" ||
//     data.firstname.trim().length === 0
//   ) {
//     isFormValid = false;
//     errors.firstname = "Please provide a first name.";
//   }
//   if (
//     !data.lastname ||
//     typeof data.lastname !== "string" ||
//     data.lastname.trim().length === 0
//   ) {
//     isFormValid = false;
//     errors.lastname = "Please provide a last name.";
//   }

//   if (
//     !data.email ||
//     typeof data.email !== "string" ||
//     !validator.isEmail(data.email)
//   ) {
//     isFormValid = false;
//     errors.email = "Please provide a correct email address.";
//   }

//   // if (
//   //   !data.password ||
//   //   typeof data.password !== "string" ||
//   //   data.password.trim().length < 8
//   // ) {
//   //   isFormValid = false;
//   //   errors.password = "Password must have at least 8 characters.";
//   // }

//   // if (!data.confirmPassword || data.confirmPassword !== data.password) {
//   //   isFormValid = false;
//   //   errors.confirmPassword = "Password confirm doesn't match";
//   // }

//   // if (Array.isArray(data.categories) && data.categories.length === 0) {
//   //   isFormValid = false;
//   //   errors.categories = "Please check your music profession";
//   // }

//   if (!isFormValid) {
//     errors.message = "Check the form for errors.";
//   }

//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// };

// module.exports = {
//   validateLoginForm: validateLoginForm,
//   validateUpdateForm: validateUpdateForm
// };
