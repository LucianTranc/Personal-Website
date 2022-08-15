import React, {useState, useRef, useEffect} from 'react';
import '../App.css';
import './FadeInSection.css';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
      { props.children }
    </div>
  )
}