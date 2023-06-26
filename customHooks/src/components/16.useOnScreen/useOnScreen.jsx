import { useEffect, useState } from 'react'

const useOnScreen = (ref, rootMargin="0px") => {
  const [ isVisible, setIsVisible ] = useState(false);
  
  useEffect(() => {
    if (ref.current === null) return;
    const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        {rootMargin}
    )
    observer.observe(ref.current)
    return () => {
        if (ref.current === null) return;
        observer.unobserve(ref.current)
    }
  }, [ref, rootMargin])

  return isVisible;
}

export default useOnScreen