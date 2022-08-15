import React, {useState, useRef, useLayoutEffect} from 'react';
import '../App.css';
import './ScrollFadeSection.css';

export default function ScrollFadeSection(props) {
  const [isVisible, setVisible] = useState(true);
  
  var thresholds = [];

  for (var i = 0; i < 100; i++) {
    thresholds.push(i/100);
  }

  let options = {
    threshold: thresholds
  }

  const domRef = React.useRef();

  useLayoutEffect(() => { const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        entry.target.style.opacity = (entry.intersectionRatio - 0.25) * 2;
      });
    }, options);

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div ref={ domRef } className={ `scroll-fade-section ${ isVisible ? 'is-visible' : '' }` }>
      { props.children }
    </div>
  )
}