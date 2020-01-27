import React from "react";
import "../../css/materialize.css";
import ResponsivePiano from "./Piano";
import M from "materialize-css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.modalIsActive = this.modalIsActive.bind(this);
  }

  // componentDidMount() {
  //   let modal = document.querySelectorAll('.modal');
  //   console.log(modal);
  //   M.Modal.init(modal, { dismissible: false })
  // }

  modalIsActive() {
    if (!this.state.isActive) {
      this.setState({
        isActive: true
      });
    } else {
      this.setState({
        isActive: false
      });
    }

    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="container">
          <div id="modal1" className="modal bottom-sheet">
            <div className="modal-content right-align">
              <button
                onClick={this.modalIsActive}
                className="modal-close btn-small btn-floating waves-effect waves-light red"
              >
                <i className="material-icons">close</i>
              </button>
              <form
                id="contact-form"
                className="col s12"
                action="/send"
                method="post"
              >
                <div className="container">
                  <div className="row">
                    <div className="input-field col l6 m6 s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="validate"
                      />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col l6 m6 s12">
                      <i className="material-icons prefix">phone</i>
                      <input
                        id="icon_telephone"
                        type="tel"
                        className="validate"
                      />
                      <label htmlFor="icon_telephone">Telephone</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="validate"
                      />
                      <label htmlFor="email">Email</label>
                      <span
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        Helper text
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea
                        id="message"
                        name="message"
                        className="materialize-textarea"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="center-align">
              <button className="btn waves-effect waves-light" type="submit">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

          <ResponsivePiano modalStatus={this.state.isActive} />
        </div>

        <div style={{ marginTop: 50 }} className="center-align">
          <a
            onClick={this.modalIsActive}
            className="modal-trigger btn-floating btn-large waves-effect waves-light red pulse"
            href="#modal1"
          >
            <i className="large material-icons">email</i>
          </a>
        </div>
      </>
    );
  }
}

export default ContactForm;

// function alertMessage() {
//   M.toast({ html: "I am a toast!" });
// }

// class ContactForm extends React.Component {
//   render() {
//     return (
//       <form id="contact-form" className="col s12" action="/send" method="post">
//         <div className="row">
//           <div className="input-field col l6 m6 s12">
//             <i className="material-icons prefix">account_circle</i>
//             <input id="name" name="name" type="text" className="validate" />
//             <label htmlFor="first_name">First Name</label>
//           </div>
//           {/* <div className="input-field col l6 m6 s12">
//                 <i className="material-icons prefix">phone</i>
//                 <input id="icon_telephone" type="tel" className="validate" />
//                 <label htmlFor="icon_telephone">Telephone</label>
//               </div> */}
//           <div className="input-field col s12">
//             <i className="material-icons prefix">email</i>
//             <input id="email" name="email" type="email" className="validate" />
//             <label htmlFor="email">Email</label>
//             <span
//               className="helper-text"
//               data-error="wrong"
//               data-success="right"
//             >
//               Helper text
//             </span>
//           </div>
//           <div className="input-field col s12">
//             <i className="material-icons prefix">mode_edit</i>
//             <textarea
//               id="message"
//               name="message"
//               className="materialize-textarea"
//             ></textarea>
//             <label htmlFor="message">Message</label>
//           </div>
//         </div>
//         <button
//           className="btn waves-effect waves-light"
//           type="submit"
//           onClick={alertMessage}
//         >
//           Submit
//           <i className="material-icons right">send</i>
//         </button>
//       </form>
//     );
//   }
