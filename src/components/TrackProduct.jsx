//import React from 'react'
import { QRCode, Steps } from "antd";
export default function TrackProduct() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[32px] font-bold text-[#00714F] mt-8">Agrichain</p>
        <p className="text-[20px] font-semibold text-gray-400">
          Product Tracking
        </p>
        <div className="mt-10">
          <QRCode value="https://www.cet.ac.in/" bgColor="#fff" />
        </div>
        <div className="mt-5">
          <p>
            Id:{" "}
            <span className="text-[#00714F] font-medium text-sm">
              0x8236872e3f4452
            </span>
          </p>
        </div>
        <div className="mt-20">
          <Steps
            current={1}
            percent={60}
            items={[
              {
                title: "Finished",
                description: "Completed product registration",
              },
              {
                title: "Processing",
                //subTitle: "Left 00:00:08",
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
      </div>
    </>
  );
}
