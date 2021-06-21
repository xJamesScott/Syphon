import { useLocation } from "react-router-dom";

export const useQuery = () => {
  // return new URLSearchParams(useLocation().search);
  if (process.browser) { return new URLSearchParams(window.location.state); }
};

export const useFetcher = async (method, endpoint) => {
  try {
    const res = await axios`.${method}(${endpoint})`
    const {
      data: { data,
        handler: { redirect }
      } } = res

    if (redirect) {
      router.push(redirect)
    }
    return data

  } catch (err) {
    return err
  }
}