import { useLocation } from "react-router-dom";
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';



export const useQuery = () => {
  // return new URLSearchParams(useLocation().search);
  if (process.browser) { return new URLSearchParams(window.location.state); }
};

// export const useFetcher = async (method, endpoint) => {
//   try {
//     const res = await axios`.${method}(${endpoint})`
//     const {
//       data: { data,
//         handler: { redirect }
//       } } = res

//     if (redirect) {
//       router.push(redirect)
//     }
//     return data

//   } catch (err) {
//     return err
//   }
// }
// export const useFetcher = function (request) {
//   // try {
//   //   const res = request
//   //   const {
//   //     data: { data,
//   //       handler: { redirect }
//   //     } } = res

//   //   if (redirect) {
//   //     router.push(redirect)
//   //   }
//   //   return data

//   // } catch (err) {
//   //   return err
//   // }
//   console.log("yoo")
//   return request
// }

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