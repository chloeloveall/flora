import React, { useState, useEffect, useRef } from "react";
/*
  @function useInterval 
  source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function ImageCarousel() {
  const urls = [
    'https://res.cloudinary.com/du72rtkvq/image/upload/c_scale,h_2027/v1621475953/annie-spratt-uz92LQEQioA-unsplash_vlymwt.jpg',
    'https://res.cloudinary.com/du72rtkvq/image/upload/v1621475944/kelly-sikkema-aCnAxrwaesI-unsplash_u6f0o9.jpg',
    'https://res.cloudinary.com/du72rtkvq/image/upload/c_scale,h_2027/v1621475832/pexels-rubyand-lion-1118154_jaw6ix.jpg'
  ];

  const [imgIdx, setImgIdx] = useState(0);

  useInterval(() => {
    if (imgIdx < urls.length - 1) {
      setImgIdx(imgIdx + 1);
    } else {
      setImgIdx(0);
    }
  }, 4000);
  return (
    <img
      style={{ width: "100%", height: "50%" }}
      src={urls[imgIdx]}
      alt="img"
    />
  );
}