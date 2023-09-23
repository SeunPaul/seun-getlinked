import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroll() {
  const location = useLocation();
  const whitelist = ["/", "/contact", "/register"];
  useEffect(() => {
    if (whitelist.includes(location.pathname)) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default Scroll;
