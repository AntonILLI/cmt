import React from 'react';
import "../../css/materialize.css";
import ResponsivePiano from './Piano';
import M from 'materialize-css';

class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.modalIsActive = this.modalIsActive.bind(this)
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
        })
      } else {
        this.setState({
          isActive: false
        })
      }

      console.log(this.state)

    }

    render() {
        return (
          <>
          <button onClick={this.modalIsActive} className="waves-effect waves-light btn modal-trigger" href="#modal1">
            Modal
          </button>
        
          <div id="modal1" className="modal bottom-sheet">
            <div className="modal-content right-align">
            <button onClick={this.modalIsActive} className="modal-close waves-effect waves-teal btn-flat">Close</button>
            <form id="contact-form" className="col s12" action="/send" method="post">
              <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" name="name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Telephone</label>
              </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input id="email" name="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="message" name="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
              <button className="btn waves-effect waves-light" type="submit">Submit
                  <i className="material-icons right">send</i>
            </button>
            </form>
            </div>
          </div>

          <ResponsivePiano modalStatus={this.state.isActive}/>

        </>
        );
    }
}

export default ContactForm;