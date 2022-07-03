import styled from "styled-components";

export const StyledFps = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;

  & > div{
    position: unset!important;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  #canvas {
    width: 100%;
    height: 100%;
    touch-action: none;
    display: block;
  }
`

export const StyledCover = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  
  pre {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .play {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    color: #fefefe;
    letter-spacing: 2px;
    display: block;

    .t {
      font-size: 40px;
      line-height: 30px;
      position: relative;
      top: 30px;
      left: 10px;
     .fa {
        font-size: 20px;
      }
    }
  }
`