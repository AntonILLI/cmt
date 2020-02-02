//teachers cards page component admindashboard landing page
import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import ReactParticles from "react-particles-js";
import configJson from "../../globals/configJson.js";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../globals/Button";
import { animated, useSpring } from "react-spring";
import { screenSmallerThan } from "../../globals/Util";
import { setColor } from "../../globals/colors";
import EditIcon from "../svg-icons/Edit";
import RemoveIcon from "../svg-icons/Remove";
import { useHistory } from 'react-router-dom';
import CallModal from "../../modal/CallModal";

function Teachers({ teachers, deleteUser, loading, error }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  console.log("history:", history);

  const ReadMore = ({ children, maxCharacter = 190 }) => {
    const text = children;
    const [isShrinked, setIsShrinked] = useState(true);
    const resultString = isShrinked ? text.slice(0, maxCharacter) : text;

    function toggleIsShrinked() {
      // e.stopPropagation();
      setIsShrinked(!isShrinked);
    }

    const StyledParagraph = styled.p`
      font-size: 1.3rem;
      color: #696969;
      font-style: italic;
    `;

    return (
      <StyledParagraph>
        {resultString}
        <PrimaryBtn background onClick={toggleIsShrinked}>
          {isShrinked ? "Read More" : "Read Less"}
        </PrimaryBtn>
      </StyledParagraph>
    );
  };

  return (
    <MySection>
      <Particles>
        <MyTitle>
          <h1 className="common-heading">All Teachers</h1>
          <div className="underline">
            <div className="small-underline"></div>
            <div className="big-underline"></div>
          </div>
        </MyTitle>
        <MyParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. aspernatur
          sint! Esse aliquam explicabo aperiam eos ✨✨
        </MyParagraph>
        　{" "}
        <MyCardWrapper>
          {teachers.map(teacher => (
            <>
              <TeacherCards key={teacher._id}>
                <div className="teachers-image-wrapper">
                  <img
                    style={{ height: 150, width: 210 }}
                    src={require(`../../../../../public/uploads/${teacher.photo}`)}
                    className="teachers-image"
                  ></img>
                </div>
                <div className="teachers-info">
                  <h3 className="teachers-name">
                    {`${teacher.firstname} ${teacher.lastname}`}
                  </h3>

                  <p className="teachers-title">{teacher.price}</p>
                  <p className="teachers-title">{teacher.careers}</p>

                  <ButtonWrapper>
                    <Link
                      to={`/admin/modalPage/${teacher._id}`}
                      onClick={() => setIsModalOpen(true)}
                    >
                      <EditIcon color={setColor.primaryColor} />
                    </Link>

                    <ABtn
                      onClick={() =>
                        deleteUser(teacher._id).then(window.location.reload())
                      }
                    >
                      {" "}
                      <RemoveIcon color={setColor.removeColor} />
                    </ABtn>
                  </ButtonWrapper>
                  <ReadMore maxCharacter={100}>{teacher.description}</ReadMore>

                  {isModalOpen && (
                    <CallModal onClose={() => setIsModalOpen(false)} />
                  )}
                </div>
              </TeacherCards>
            </>
          ))}
        </MyCardWrapper>
      </Particles>
    </MySection>
  );
}

function TeacherCards({ children }) {
  // ref onMouseMove event
  const ref = useRef();

  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // ... so that we can use animatedProps.xys.interpolate() to ...

      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <MyCard
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.1 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </MyCard>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={configJson}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}

export const MySection = styled.section`
  margin: 0 5rem 8rem 8rem;

  /* background-color: #15141b; */
`;

export const MyTitle = styled.div`
  padding: 5rem;
  text-align: center;
  color: #b85d1c;

  .common-heading {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }

  .small-underline {
    width: 9rem;
    height: 0.1rem;
    background-color: #b85d1c;
    margin: 0 auto 1rem auto;
  }

  .big-underline {
    width: 9rem;
    height: 0.1rem;
    margin: auto;
    background-color: #b85d1c;
  }
`;
export const MyParagraph = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  /* color: #ddd; */
  width: 50%;
  margin: 2rem auto 8rem auto;
  text-align: center;
  ${screenSmallerThan.phone`
    font-size: 1.4rem;
    width: 80%;
    
  `}
`;
const MyCard = styled(animated.div)`
  background-color: #eee;
  width: 60rem;
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 30px;
  padding-top: 10px;
  border: 1.5px solid #b85d1c;
  will-change: transform;

  /* &:hover {
      background-color: #b9c4be;
    } */

  .teachers-image-wrapper {
    margin: auto 0;
  }

  .teachers-image {
    width: 20rem;
    margin-left: -1.3rem;
  }

  .teachers-info {
    padding: 0 2rem;
  }

  .teachers-name {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 5px;
    color: #b85d1c;
  }

  .teachers-title {
    font-size: 1.3rem;
    font-style: italic;
    color: #696969;
  }
`;

const ABtn = styled.div`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  direction: row;
  justify-content: flex-end;
`;

const MyCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem 0;
  justify-content: space-evenly;

  padding-bottom: 25rem;

  ${screenSmallerThan.tablet`
    flex-direction: column;
    width: 20rem;
  `}
`;

// const MyTeacherCard = styled.div`

export default Teachers;
