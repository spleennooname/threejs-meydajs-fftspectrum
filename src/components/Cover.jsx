

import styled from "styled-components";

const StyledCover = styled.div`
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

//import { buttonStart$ } from "../lib/rx";
/* import { useObservableState } from 'observable-hooks'
 */

import gsap from "gsap"

import PropTypes from "prop-types";
//import { of, BehaviorSubject, Subject, switchMap, mapTo, startWith, timer } from "rxjs"
import * as React from "react"
import { useRef, useEffect } from "react";

export const Cover = ({ click }) => {

  const coverRef = useRef(null);

  const clickRef = () => {
 
    const domCover = coverRef.current

    gsap
      .timeline()
      .to(domCover, {
        duration: 1.,
        autoAlpha: 0,
        ease: "power2.out"
      })
      .to(domCover, {
        duration: 1.0,
        delay: 1.,
        autoAlpha: 0,
        ease: "power2.out"
      });

      click( domCover )
  }

  useEffect(
    () => {
   
       gsap
        .timeline()
        .to("#cover", {
          duration: 2,
          autoAlpha: 1,
          ease: "expo.inOut"
        })

      return function cleanup() { //inutile, perchè effetto eseguito once
        console.log("Cover: cleanup")
      }
    },
    [] // eseguito once
  )

  return (
    <>
      <StyledCover ref={coverRef}
        onClick={clickRef}
        id="cover">
        <div className="play f">
          <pre>
            ╭━━━┳━━━┳━━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮<br />
            ┃╭━━┫╭━━┫╭╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮<br />
            ┃╰━━┫╰━━╋╯┃┃╰╯╭━━┳━━┳━━┳━┻╮╭╋━┳╮╭┳╮╭╮<br />
            ┃╭━━┫╭━━╯╱┃┃╱╱┃━━┫╭╮┃┃━┫╭━┫┃┃╭┫┃┃┃╰╯┃<br />
            ┃┃╱╱┃┃╱╱╱╱┃┃╱╱┣━━┃╰╯┃┃━┫╰━┫╰┫┃┃╰╯┃┃┃┃<br />
            ╰╯╱╱╰╯╱╱╱╱╰╯╱╱╰━━┫╭━┻━━┻━━┻━┻╯╰━━┻┻┻╯<br />
            ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃Accept microphone request,<br />
            ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯click to play<br />
          </pre>
          <div className="t">&#x1F3A4;</div>
        </div>
      </StyledCover>
    </>
  );
}

Cover.propTypes ={ click: PropTypes.func }
