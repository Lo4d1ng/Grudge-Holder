import { useEffect } from "react";
import { createPortal } from "react-dom";

interface IChildren{
  children: React.ReactNode;
} 

const Portal = ({children} : IChildren) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");
  el.setAttribute('style', 'position: absolute;width: 100vw;height: 100vh;z-index:2;');

  useEffect(() => {
    if (mount) {
      mount && mount.appendChild(el);
      return () => mount.removeChild(el);
    }

    return () => {}
  }, [el, mount])

  return (
      createPortal(children, el)
  );
};

export default Portal;