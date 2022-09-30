import React, { useEffect, useState } from 'react';
import './Scroll.css';
import { FaArrowUp } from 'react-icons/fa';
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [ visible, setVisiblity ] = useState(false)

  useEffect(() => {
    if(pageYOffset > 400){
      setVisiblity(true);
    }else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

  if(!visible){
    return false;
  }
  return (
    <>
      <div className="scrolltotop-container" onClick={ScrollToTop}>
        <div className="scrolltotop-icon">
          <FaArrowUp />
        </div>
      </div>
    </>
  )
}

export default ScrollToTop