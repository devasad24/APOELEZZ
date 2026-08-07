// "use client";

// import React from "react";

// import { useState } from "react";
// import { Upload } from "lucide-react";

// export default function ApplyPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     noticePeriod: "",
//     resume: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Apply Now
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="name" className="block text-sm">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full input-primary"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full input-primary"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="phone" className="block text-sm">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full input-primary"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="noticePeriod" className="block text-sm">
//                 Notice Period
//               </label>
//               <input
//                 type="text"
//                 id="noticePeriod"
//                 name="noticePeriod"
//                 value={formData.noticePeriod}
//                 onChange={handleInputChange}
//                 className="w-full input-primary"
//                 required
//               />
//             </div>

//             <div className="space-y-2 md:col-span-2">
//               <label htmlFor="resume" className="block text-sm">
//                 Resume
//               </label>
//               <label
//                 htmlFor="resume"
//                 className="flex items-center justify-center gap-2 w-full input-primary rounded-md p-3 cursor-pointer"
//               >
//                 <Upload size={18} />
//                 <span>
//                   {formData.resume
//                     ? formData.resume.name
//                     : "Upload your Resume"}
//                 </span>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   onChange={handleFileChange}
//                   className="hidden"
//                   accept=".pdf,.doc,.docx"
//                 />
//               </label>
//             </div>

//             <div className="md:col-span-2 mt-4">
//               <button type="submit" className="w-full btn_primary py-3">
//                 Apply
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    noticePeriod: "",
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const ip = await fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => data.ip)
        .catch(() => "Unknown");

      const userAgent = navigator.userAgent;
      const pageUrl = window.location.href;

      const emailMessage = `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Notice Period:</strong> ${formData.noticePeriod}</p>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>Page URL:</strong> ${pageUrl}</p>
      `;

      const payload = new FormData();
      payload.append("subject", `Job Application from ${formData.name}`);
      payload.append("message", emailMessage);
      if (formData.resume) {
        payload.append("resume", formData.resume);
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        noticePeriod: "",
        resume: null,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Apply Now
        </h1>

        {status === "success" ? (
          <p className="text-green-500 text-center mb-4">
            Application submitted successfully!
          </p>
        ) : status === "error" ? (
          <p className="text-red-500 text-center mb-4">
            Something went wrong. Please try again.
          </p>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full input-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full input-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full input-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="noticePeriod" className="block text-sm">
                Notice Period
              </label>
              <input
                type="text"
                id="noticePeriod"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleInputChange}
                className="w-full input-primary"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="resume" className="block text-sm">
                Resume
              </label>
              <label
                htmlFor="resume"
                className="flex items-center justify-center gap-2 w-full input-primary rounded-md p-3 cursor-pointer"
              >
                <Upload size={18} />
                <span>
                  {formData.resume
                    ? formData.resume.name
                    : "Upload your Resume"}
                </span>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full btn_primary py-3"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Apply"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
