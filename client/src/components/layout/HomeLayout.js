import React, {Component} from "react";
//src pictures imported
import photo_natasha from "../../img/p_natasha_profile.jpg";
import photo_anna from "../../img/p_anna_profile.jpg";
import photo_valeriy from "../../img/p_valeriy_profile.jpg";
import photo_iryna from "../../img/p_iryna_profile.jpg";


import "../../css/materialize.css";
import M from 'materialize-css';
let piano = require("../../img/piano-3505109_1920.jpg");

const styles = {
  container: {
    backgroundImage: `url(${piano})`,
    backgroundSize: "cover",
    minHeight: 325,
    paddingTop: 6.5
  }
};

class MaterializeHomePage extends Component {

  componentDidMount() {
    //Explicitly initilize slider
    let slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {});
    //Auto init all other materialize scripts
    M.AutoInit();

  }

  render() {
    return (
<div>
    <div className="parallax-container valign-wrapper">
      <div className="row container center-align">
        <h1 id="header">Canterbury Music Teachers</h1>
      </div>
      <div id="firstImage" className="parallax">
        <img src="https://cdn.pixabay.com/photo/2018/11/03/06/37/abstract-3791494_960_720.jpg" />
      </div>
    </div>

<div className="section white">
<div className="row container">

  <h2 className="header">Our Teachers</h2>
  <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
             
  <div className="row">


      <div className="col s12 m6">
        <div className="card hoverable">
          <div className="card-image">
            <img src={photo_natasha} />
            <span className="card-title">
              <blockquote>
              <p className="bold flow-text">Natasha Chernousova</p>
              </blockquote>
            </span>
            <a href="#modal1" className="btn-large btn-floating halfway-fab waves-effect waves-light brown darken-4 pulse scale-transition">
              <i className="material-icons">audiotrack</i>
            </a>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>

      <div className="col s12 m6">
        <div className="card hoverable">
          <div className="card-image">
            <img src={photo_anna} />
            <span className="card-title">
              <blockquote>
                <p className="flow-text">Anna Maxymova</p>
              </blockquote>
            </span>
            <a href="#modal1" className="btn-large btn-floating halfway-fab waves-effect waves-light brown darken-4 pulse scale-transition"><i className="material-icons">audiotrack</i></a>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>


    </div>
    
    <div className="row">


        <div className="col s12 m6">
            <div className="card hoverable">
              <div className="card-image">
                <img src={photo_valeriy} />
                <span className="card-title">
                  <blockquote>
                  <p className="flow-text">Valeriy Maxymov</p>
                </blockquote></span>
                <a href="#modal1" className="btn-large btn-floating halfway-fab waves-effect waves-light brown darken-4 pulse scale-transition"><i className="material-icons">audiotrack</i></a>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>


        <div className="col s12 m6">
          <div className="card hoverable">
            <div className="card-image">
              <img src={photo_iryna} />
              <span className="card-title"><blockquote><p className="flow-text">Iryna Maxymova</p></blockquote></span>
              <a href="#modal1" className="btn-large btn-floating halfway-fab waves-effect waves-light brown darken-4 pulse scale-transition"><i className="material-icons">audiotrack</i></a>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>


      </div>
</div>
</div>


<div className="parallax-container">
  <div className="parallax">
    <img src="https://cdn.pixabay.com/photo/2016/02/29/23/15/sheet-music-1229481_960_720.jpg" />
  </div>
</div>


<div className="section white">
<div className="row container">

    <h2 className="header">News and Events</h2>
    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>

    <div className="slider">
        <ul className="slides">
          <li>
            <img src="https://cdn.pixabay.com/photo/2017/03/05/19/54/concert-2119610_960_720.jpg" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              <a href="#">Link</a>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2017/07/28/15/40/trombone-2548982_960_720.jpg" />
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              <a href="#">Link</a>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2014/12/07/15/03/orchestra-559759_960_720.jpg" />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              <a href="#">Link</a>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2015/05/23/21/05/cello-780980_960_720.jpg" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              <a href="#">Link</a>
            </div>
          </li>
        </ul>
      </div>

</div>
</div>  

<div className="parallax-container">
    <div className="parallax">
      <img src="https://cdn.pixabay.com/photo/2018/08/21/17/01/violin-3621667_960_720.jpg" />
    </div>
</div>

<div className="section white">
<div className="row container">
    
    <h2 className="header">Contact Us</h2>

      <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col l6 m6 s12">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label for="icon_telephone">Telephone</label>
              </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Message</label>
                  </div>
                </div>
            </form>
        </div>


</div>
</div>


          <footer className="page-footer brown darken-4">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>



</div>
    )
  }
}

const HomeLayout = () => {
  return (
    // <>
          <MaterializeHomePage />
      //     <div className="jumbotron jumbotron-fluid" style={styles.container}>
      //   <div className="container" style={{ color: "ivory" }}>
      //     <h1 className="display-4">Hello, world!</h1>
      //     <p className="lead">
      //       This is a simple hero unit, a simple jumbotron-style component for
      //       calling extra attention to featured content or information.
      //     </p>
      //     <hr className="my-4" />
      //     <p>
      //       It uses utility classes for typography and spacing to space content
      //       out within the larger container.
      //     </p>
      //     <p className="lead">
      //       <a className="btn btn-primary btn-lg" href="#" role="button">
      //         Learn more
      //       </a>
      //     </p>
      //   </div>
      // </div>

      // <div className="row m-0">
      //   <div className="d-flex justify-content-center col-md-8">
      //     <div className="card-deck">
      //       <div
      //         className="card border-dark text-center"
      //         style={{ width: "45rem" }}
      //       >
      //         <img
      //           className="card-img-top"
      //           src={photo_natasha}
      //           alt="Card image cap"
      //         />
      //         <div className="card-body">
      //           <h5 className="card-title">Teacher's Name</h5>
      //           <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
      //             "With supporting text below as a natural lead-in to additional
      //             content."
      //           </p>
      //         </div>
      //         <a href="#" className="btn btn-primary btn-lg btn-block m-0">
      //           Get in touch
      //         </a>
      //       </div>

      //       <div
      //         className="card border-dark text-center"
      //         style={{ width: "45rem" }}
      //       >
      //         <img className="card-img-top" src={photo_anna} alt="Card image cap" />
      //         <div className="card-body">
      //           <h5 className="card-title">Teacher's Name</h5>
      //           <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
      //             "With supporting text below as a natural lead-in to additional
      //             content."
      //           </p>
      //         </div>
      //         <a href="#" className="btn btn-primary btn-lg btn-block m-0">
      //           Get in touch
      //         </a>
      //       </div>

      //       <div
      //         className="card border-dark text-center"
      //         style={{ width: "45rem" }}
      //       >
      //         <img
      //           className="card-img-top"
      //           src={photo_valeriy}
      //           alt="Card image cap"
      //         />
      //         <div className="card-body">
      //           <h5 className="card-title">Teacher's Name</h5>
      //           <p className="d-md-none d-lg-block card-text font-italic font-weight-light">
      //             "With supporting text below as a natural lead-in to additional
      //             content."
      //           </p>
      //         </div>
      //         <a href="#" className="btn btn-primary btn-lg btn-block m-0">
      //           Get in touch
      //         </a>
      //       </div>
      //     </div>
      //   </div>

      //   <aside className="col-md-4 blog-sidebar">
      //     <div
      //       id="carouselExampleIndicators"
      //       className="carousel slide"
      //       data-ride="carousel"
      //     >
      //       <ol className="carousel-indicators">
      //         <li
      //           data-target="#carouselExampleIndicators"
      //           data-slide-to="0"
      //           className="active"
      //         ></li>
      //         <li
      //           data-target="#carouselExampleIndicators"
      //           data-slide-to="1"
      //         ></li>
      //         <li
      //           data-target="#carouselExampleIndicators"
      //           data-slide-to="2"
      //         ></li>
      //       </ol>
      //       <div className="carousel-inner">
      //         <div className="carousel-item active">
      //           <img className="d-block w-100" src="" alt="First slide" />
      //           <div className="carousel-caption">
      //             <a to="/">
      //               <h5 style={{ color: "ivory" }}>Event name</h5>
      //             </a>
      //             <p>Event description</p>
      //           </div>
      //         </div>

      //         <div className="carousel-item">
      //           <img
      //             className="d-block w-100"
      //             src=""
      //             alt="Second slide"
      //           />
      //           <div className="carousel-caption">
      //             <a href="/">
      //               <h5 style={{ color: "ivory" }}>Event name</h5>
      //             </a>
      //             <p>Event description</p>
      //           </div>
      //         </div>

      //         <div className="carousel-item">
      //           <img className="d-block w-100" src="" alt="Third slide" />
      //           <div className="carousel-caption">
      //             <a href="#">
      //               <h5 style={{ color: "ivory" }}>Event name</h5>
      //             </a>
      //             <p>Event description</p>
      //           </div>
      //         </div>
      //       </div>
      //       <a
      //         className="carousel-control-prev"
      //         href="#carouselExampleIndicators"
      //         role="button"
      //         data-slide="prev"
      //       >
      //         <span
      //           className="carousel-control-prev-icon"
      //           aria-hidden="true"
      //         ></span>
      //         <span className="sr-only">Previous</span>
      //       </a>
      //       <a
      //         className="carousel-control-next"
      //         href="#carouselExampleIndicators"
      //         role="button"
      //         data-slide="next"
      //       >
      //         <span
      //           className="carousel-control-next-icon"
      //           aria-hidden="true"
      //         ></span>
      //         <span className="sr-only">Next</span>
      //       </a>
      //     </div>
      //   </aside>
      // </div>
    // </>
  );
};
export default HomeLayout;
