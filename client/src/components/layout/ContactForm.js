import React, { Component }  from 'react';
import "../../css/materialize.css";
import M from 'materialize-css';

function alertMessage() {
    M.toast({html:'I am a toast!'});
}

class ContactForm extends React.Component {
    
    render() {
        return (
            <form id="contact-form" className="col s12" action="/send" method="post">
            <div className="row">
              <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" name="name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              {/* <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Telephone</label>
              </div> */}
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
                </div>
                <button class="btn waves-effect waves-light" type="submit" onClick={alertMessage}>Submit
                  <i class="material-icons right">send</i>
                </button>
            </form>
        );
    }
}

export default ContactForm;