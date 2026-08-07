"use client";
import useApi from "@/utils/useApi";
import Image from "next/image";
import { useState } from "react";
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
const JobForm = () => {
  const { fetchData } = useApi();
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadContact: "",
    notice_period: "",
    file: "",
  });

  console.log("formData", formData);
  // const [file, setFile] = useState(false);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFormData((pre) => ({ ...pre, file: selectedFile }));
      console.log("Selected file:", selectedFile);
    }
  };
  function handleSubmit(e) {
    e?.preventDefault();

    const { leadName, leadEmail, leadContact, notes } = formData;

    // Check for empty fields
    if (!leadName || !leadEmail || !leadContact || !notes) {
      alert("All fields are required.");
      return;
    }

    // Proceed with API call
    fetchData(
      `/create-lead`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: formData,
      },
      (res, status) => {
        if (status) {
          alert("Form is successfully submitted!");
        } else {
          alert("Form cannot be submitted");
        }
      }
    );
  }

  return (
    <>
      <div
        style={
          {
            //   background: "url(/images/contact_us_bg.png)",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
          }
        }
        //   className="w-full min-h-[500px] md:min-h-[600px] lg:h-[700px] relative py-10 md:py-16"
        // >
        className="w-full relative"
      >
        {/* Form container */}
        {/* <div className="flex flex-col items-center h-full gap-4 md:gap-7 px-4 sm:px-6 relative z-20 max-w-[1200px] mx-auto">
          <h3 className="text-white font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            send resume
          </h3>
          <p className="text-white font-base uppercase text-2xl sm:text-sm md:text-base lg:text-lg text-center">
            Let Us Know About Your Experience With Us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-11 w-full max-w-[700px]">
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
              <label htmlFor="message" className="text-white">
                Notice Period
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
                Resume
              </label>
              <input
                type="file"
                // id="message"

                onChange={handleFileChange}
                className="input-primary"
              />
              {formData?.file ? <p>File Selected</p> : null}
            </div>

            <div className="md:col-start-2 md:col-end-3 mt-4">
              <button
                onClick={(e) => {
                  e?.stopPropagation();
                  //   handleSubmit();
                }}
                className="btn_primary w-full py-[10px] text-white rounded-[14px] cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div> */}
        <div className="flex items-center justify-center">
          <a
            href="mailto:hr@apoelezz.com"
            target="_blank"
            className="btn_primary  text-center py-3 text-white rounded-[14px] cursor-pointer px-6"
          >
            Send Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default JobForm;
