//global style applies to child component
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`


*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
html{
  font-size: 62.5%;
  box-sizing: border-box;

} 
 
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}




h1{
  font-size:3em;line-height:1.2;
  margin-bottom:0.5em
}
h2{
  font-size:2em;
  margin-bottom:0.75em
}
h3{
  font-size:1.5em;line-height:1;
  margin-bottom:1em;
}
h4{
  font-size:1.2em;line-height:1.2;
  margin-bottom:1.25em;font-weight:bold;
}
h5{
  font-size:1em;
  margin-bottom:1.5em;font-weight:bold;
}
h6{
  font-size:3em;font-weight:bold;
}
p{
  line-height:1.5;
  margin:0 0 1.5rem 0;
  }

`;

export default Globals;
