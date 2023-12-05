// Import necessary dependencies and functions
import React, { useState, useEffect } from "react";
import { QRCode, Steps } from "antd";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context"; // Adjust the import path accordingly

export default function TrackProduct() {
  const location = useLocation();
  const { add } = location.state; // Destructure getStepDetailsFn from location.state
  const { contract, getStepDetailsFn } = useStateContext();

  /*const [stepDetails, setStepDetails] = useState({
    isLastStep: false,
    isFirstStep: false,
    isProcessedStep: false,
    next: null,
    prev: null,
    owner: null,
    step: "",
    location: "",
    description: "",
    time: 0,
  });*/

  useEffect(() => {
    // Function to fetch step details
    const fetchStepDetails = async () => {
      try {
        // Call the contract function to get step details
        const details = await getStepDetailsFn(add);

        // Set the step details in the state
        console.log("Step Data", details);
      } catch (error) {
        console.error("Error fetching step details:", error);
      }
    };

    // Fetch step details when the component mounts
    fetchStepDetails();
  }, [contract, add]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[32px] font-bold text-[#00714F] mt-8">Agrichain</p>
        <p className="text-[20px] font-semibold text-gray-400">
          Product Tracking
        </p>
        <div className="mt-10">
          <QRCode value={JSON.stringify(stepDetails)} bgColor="#fff" />
        </div>
        <div className="mt-5">
          <p>
            Id:{" "}
            <span className="text-[#00714F] font-medium text-sm">{add}</span>
          </p>
        </div>
        <div className="mt-20">
          <Steps
            current={1} // Adjust the current step based on your logic
            percent={60} // Adjust the percent based on your logic
            items={[
              {
                title: "Finished",
                description: "Completed product registration",
              },
              {
                title: "Processing",
                description: "Verified and processed by the processor",
              },
              {
                title: "Waiting",
                description: "Out for purchase",
              },
              {
                title: "Sold out",
                description: "Confirmed purchase, chain terminated",
              },
            ]}
          />
        </div>

        {/* Display the fetched step details */}
        <div className="mt-5">
          <p>Step Details:</p>
        </div>
      </div>
    </>
  );
}
