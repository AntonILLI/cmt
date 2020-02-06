import React from "react";
import "../../css/materialize.css";
import ResponsivePiano from "./Piano";
import M from "materialize-css";
import axios from 'axios';
class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      name: '',
      email: '',
      message: ''
    };
    this.modalIsActive = this.modalIsActive.bind(this);
  }

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
  }

  onNameChange(event) {
  this.setState({name: event.target.value})
  }
  
  onEmailChange(event) {
  this.setState({email: event.target.value})
  }
  
  onMessageChange(event) {
  this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios({
      method: "POST", 
      // url:`${__dirname}/send`, 
      data: this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: "", email: "", message: ""})
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
                onSubmit={this.handleSubmit.bind(this)}
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
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
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
                        value={this.state.email}
                        onChange={this.onEmailChange.bind(this)}
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
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                Submit
                <i className="material-icons right">send</i>
              </button>
              </form>
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