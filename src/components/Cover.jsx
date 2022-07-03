
import { StyledCover} from './styled'

//import { buttonStart$ } from "../lib/rx";
/* import { useObservableState } from 'observable-hooks'
//import { of, BehaviorSubject, Subject, switchMap, mapTo, startWith, timer } from "rxjs"
 */

import gsap from "gsap"

import PropTypes from "prop-types";
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
      <StyledCover 
        ref={coverRef}
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
