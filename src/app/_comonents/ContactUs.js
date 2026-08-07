// import Image from "next/image";
// const ContactUs = () => {
//   return (
//     <>
//       <div
//         style={{
//           background: "url(/images/contact_us_bg.png)",
//           backgroundSize: "cover",
//         }}
//         className="w-full h-[700px] relative"
//       >
//         <Image
//           alt="coil animation"
//           src={"/images/coil.svg"}
//           width={"300"}
//           height={"300"}
//           className="absolute bottom-0 left-0"
//         />
//         <Image
//           alt="coil animation"
//           src={"/images/coil_right.svg"}
//           width={"300"}
//           height={"300"}
//           className="absolute top-0 right-0"
//         />
//         <form
//           action=""
//           className="flex flex-col items-center h-full gap-7 py-7 relative z-20"
//         >
//           <h3 className="primary-color font-bold uppercase text-5xl">
//             Let’s Make Your Dream Home a Reality
//           </h3>
//           <div className="grid grid-cols-2 gap-11 w-[700px]">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="" className="text-white">
//                 Name
//               </label>
//               <input type="text" className="input-primary" />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="" className="text-white">
//                 Email
//               </label>
//               <input type="email" className="input-primary" />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="" className="text-white">
//                 Phone
//               </label>
//               <input type="number" className="input-primary" />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="" className="text-white">
//                 Message
//               </label>
//               <input type="text" className="input-primary" />
//             </div>
//             <div></div>
//             <div>
//               <button className="btn_primary w-full py-[10px] text-white rounded-[14px] cursor-pointer">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="absolute inset-0 bg-[#00000050]"></div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
"use client";
import useApi from "@/utils/useApi";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
// let payload = {
//   leadName: "Test lead 999",
//   leadContact: "_923125142021",
//   leadEmail: "zakkihassnain110@gmail.com",
//   enquiryType: "5 Bedroom",
//   leadType: "Villa",
//   project: "luxury Eliya",
//   leadFor: "Investment",
//   language: "english",
//   leadStatus: "New",
//   leadSource: "Facebook",
//   otp: "Verified",
//   assignedToManager: "121",
//   assignedToSales: "124",
//   addedBy: "388",
//   givenBy: "",
//   lastEditedBy: "122",
//   notes: "Test note for Zaki",
//   lastEdited: "2022-11-09 18:25:43",
//   coldcall: "0",
//   feedback: "New",
//   developer: "Azizi",
// };
const ContactUs = () => {
  const { fetchData } = useApi();
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadContact: "",
    notes: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null);
  const [ip, setIp] = useState("");
  const [device, setDevice] = useState("");
  const [filename, setFilename] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDevice(navigator.userAgent);
      setFilename(window.location.href);
    }
    // Fetch IP
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip || ""))
      .catch(() => setIp(""));
  }, []);
  // function handleSubmit(e) {
  //   e?.preventDefault();

  //   fetchData(
  //     `/create-lead`,

  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       data: formData,
  //     },
  //     (res, status) => {
  //       if (status) {
  //         alert("Form is successfully submitteds!");
  //       } else {
  //         alert("Form cannot be submitted");
  //       }
  //     }
  //   );
  // }
  function handleSubmit(e) {
    e?.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setMessage("");
    const { leadName, leadEmail, leadContact, notes } = formData;
    if (!leadName || !leadEmail || !leadContact || !notes) {
      setSubmitStatus("error");
      setMessage("All fields are required.");
      setLoading(false);
      return;
    }
    // Prepare payload matching ProjectIdeaForm
    const payload = {
      leadName,
      leadEmail,
      leadContact,
      notes: notes, // use 'note' not 'notes'
      leadSource: "Website Form",
      ip,
      filename,
      device,
    };
    fetchData(
      `/create-lead`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: payload,
      },
      (res, status) => {
        setLoading(false);
        if (status) {
          setSubmitStatus("success");
          setMessage("Thank you! Your message has been sent successfully.");
          setFormData({
            leadName: "",
            leadEmail: "",
            leadContact: "",
            notes: "",
          });
        } else {
          setSubmitStatus("error");
          setMessage("Something went wrong. Please try again later.");
        }
      }
    );
  }

  // Scroll to message when it appears
  useEffect(() => {
    if (submitStatus && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [submitStatus]);

  return (
    <>
      <div
        style={{
          background: "url(/images/contact_us_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full min-h-[500px] md:min-h-[600px] lg:h-[700px] relative py-12 flex items-center justify-center"
      >
        {/* Decorative SVGs - Hidden on small screens */}
        <div className="hidden md:block">
          <Image
            alt="coil animation"
            src={"/images/coil.svg"}
            width={300}
            height={300}
            className="absolute bottom-0 left-0 w-[150px] md:w-[200px] lg:w-[300px] h-auto"
          />
          <Image
            alt="coil animation"
            src={"/images/coil_right.svg"}
            width={300}
            height={300}
            className="absolute top-0 right-0 w-[150px] md:w-[200px] lg:w-[300px] h-auto"
          />
        </div>

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-[#00000050]"></div>

        {/* Form container */}
        <div className="flex flex-col items-center gap-10 relative z-20 w-full px-[7%]">
          {/* <h3 className="primary-color font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"> */}
          <h3 className="text-white font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Let's Make Your Dream Home a Reality
          </h3>
          <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full max-w-[700px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData?.leadName}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, leadName: e?.target?.value }))
                }
                className="input-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData?.leadEmail}
                onChange={(e) =>
                  setFormData((pre) => ({
                    ...pre,
                    leadEmail: e?.target?.value,
                  }))
                }
                className="input-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-white">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData?.leadContact}
                onChange={(e) =>
                  setFormData((pre) => ({
                    ...pre,
                    leadContact: e?.target?.value,
                  }))
                }
                className="input-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <input
                type="text"
                id="message"
                value={formData?.notes}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, notes: e?.target?.value }))
                }
                className="input-primary"
              />
            </div>

            <div className="md:col-start-2 md:col-end-3 mt-4">
              <button
                onClick={(e) => {
                  e?.stopPropagation();
                  handleSubmit(e);
                }}
                className={`btn_primary w-full py-[10px] text-white rounded-[14px] cursor-pointer flex items-center justify-center ${loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
            <div></div>
            {submitStatus && (
              <div
                ref={messageRef}
                className={`mb-6 px-4 py-3 rounded-lg text-center text-base font-medium transition-all duration-300
            ${submitStatus === "success"
                    ? "text-white   "
                    : "text-red-600/90    "
                  }
          `}
                role="alert"
                tabIndex={-1}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
