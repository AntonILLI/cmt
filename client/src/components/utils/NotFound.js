import React from "react";
import * as hello from "react-kawaii";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const Page = styled.div`
    padding-top: 10rem;
    padding-bottom: 10rem;
    background-color: #b7b9ae;
    font-family: sans-serif;
    text-align: center;

    .context {
      background-color: #b7b9ae;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  `;
<<<<<<< HEAD
  const icon = [hello.Cat, hello.Browser, hello.Ghost];
=======
  const icon = [hello.IceCream, hello.Cat, hello.Browser, hello.Ghost];
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  var Kawaii = icon[Math.floor(Math.random() * icon.length)];

  return (
    <Page>
      <div className="context">
<<<<<<< HEAD
        <Kawaii size={200} mood="sad" color="#5a32a8" />
      </div>
      <h2 style={{ fontSize: "60px" }}>oops,404 error..page is not Found !!</h2>
      <Link to="/" style={{ fontSize: "30px" }}>
        woosp, back to home
      </Link>
=======
        <Kawaii size={170} mood="sad" color="#5a32a8" />
      </div>
      <h2>oops,404 error..page is not Found !!</h2>
      <Link to="/">woosp, back to home</Link>
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    </Page>
  );
}
export default NotFound;
