

// export default useApi;
import { useCallback } from "react";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

console.log("baseurl ", baseUrl);
// const baseUrl = "https://contractor-crm-backend.vercel.app/api";

// const useApi = () => {
//   /**
//    * Function to make an API request.
//    * @param {string} url - The API endpoint.
//    * @param {object} options - Axios request options (method, headers, data, etc.).
//    * @param {function} callBack
//    * @returns {Promise<{ data: any, error: any }>}
//    */
//   const fetchData = useCallback(
//     async (url, options = {}, callBack, notProtected) => {
//       let response = null;
//       let error = null;

//       try {
//         const res = await axios({
//           url: baseUrl + url,
//           ...options,
//           headers: {
//             ...options?.headers,
//           },
//         });
//         response = res.data;

//         callBack(response, true);
//       } catch (err) {
//         callBack(err.response, false);
//         console.log(err, "error in response");
//       }

//       return { response, error };
//     },
//     []
//   );

//   return { fetchData };
// };

const useApi = () => {
  const fetchData = useCallback(async (url, options = {}, callBack) => {
    let response = null;
    let error = null;
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth-token") : null;

    // Determine if method requires a body
    const method = (options.method || "GET").toUpperCase();
    const hasBody = ["POST", "PUT", "PATCH", "DELETE"].includes(method);

    // Log request details
    const requestBody =
      hasBody && options.body instanceof FormData
        ? Object.fromEntries(options.body.entries())
        : hasBody
          ? options.body
          : null;
    console.log("API Request Preparing:", {
      url: baseUrl + url,
      method,
      headers: {
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: requestBody,
    });

    try {
      const config = {
        url: baseUrl + url,
        method,
        ...options,
        headers: {
          ...(options.headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // Only include data for methods with a body
        ...(hasBody && options.body ? { data: options.body } : {}),
      };

      console.log("Axios Config:", config);

      const res = await axios(config);
      response = res.data;
      console.log("API Response:", response);
      callBack(response, true);
    } catch (err) {
      error = err.response?.data || { message: "Request failed" };
      console.error("API Error:", err.status);
      if (err.status == 401) {
        localStorage.removeItem("auth-token");
        window.location.href = "/admin";
      }
      callBack(error, false);
      // console.log(err.status, "error in response");
    }

    return { response, error };
  }, []);

  return { fetchData };
};

export default useApi;
