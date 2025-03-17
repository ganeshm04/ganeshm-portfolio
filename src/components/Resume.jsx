import React from 'react';
import styled from 'styled-components';
import Ganesh_Meti_Resume from "../assets/Ganesh_Meti_Resume.pdf"



const Resume = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <a href="https://drive.google.com/file/d/1yQWGDiVFfKgeLTkOjOkDZZf1S38m9eMp/view?usp=drivesdk"  className="text-l" target='blank'>Resume</a>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    padding: 1em;
    font-size: 1em;
    width: 7em;
    aspect-ratio: 1/0.25;
    color: white;
    background: #322b91b0;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 0.5em;
    outline: 0.1em solid #353535;
    border: 0;
    box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #212121, #252525);
    background: radial-gradient(
      circle at bottom,
      rgba(50, 100, 180, 0.5) 10%,
      #212121 70%
    );
    outline: 0;
  }

  .icon {
    fill: white;
    width: 1em;
    aspect-ratio: 1;
    top: 0;
    left: 0;
    margin: auto;
    transform: translate(-35%, 10%);
  }`;

export default Resume;
