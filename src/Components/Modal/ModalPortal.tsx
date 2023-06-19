import { useEffect } from "react";
import { createPortal } from "react-dom";
import componentCSS from '../Components.module.css';

interface IChildren{
  children: React.ReactNode;
} 

const Portal = ({children} : IChildren) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (mount) {
      mount && mount.appendChild(el);
      return () => mount.removeChild(el);
    }

    return () => {}
  }, [el, mount])

  return (
    <div className={componentCSS.modal}>
      {createPortal(children, el)}
    </div>
  );
};

export default Portal;