import { useRouter } from 'next/router';
import { useEffect } from 'react';



export const useQuery = () => {
  if (process.browser) { return new URLSearchParams(window.location.state); }
};

export const useBro = async function (response) {

  useEffect(() => {
    const router = useRouter();
    router.push("/")
  })
  try {

    const res = response
    const {
      data: { data,
        handler: { redirect }
      } } = res
    if (redirect) {
      return redirect
    }
  } catch (err) {
    console.log(err)
  }
}