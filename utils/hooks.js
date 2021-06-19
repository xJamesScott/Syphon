import { useLocation } from "react-router-dom";

export const useQuery = () => {
  // return new URLSearchParams(useLocation().search);
  if (process.browser) { return new URLSearchParams(window.location.state); }
};
