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
  const icon = [hello.Cat, hello.Browser, hello.Ghost];
  var Kawaii = icon[Math.floor(Math.random() * icon.length)];

  return (
    <Page>
      <div className="context">
        <Kawaii size={200} mood="sad" color="#5a32a8" />
      </div>
      <h2 style={{ fontSize: "60px" }}>oops,404 error..page is not Found !!</h2>
      <Link to="/" style={{ fontSize: "30px" }}>
        woosp, back to home
      </Link>
    </Page>
  );
}
export default NotFound;
