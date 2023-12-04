import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddProduct,
  Footer,
  Left,
  Login,
  Logout,
  Main,
  ProductHistory,
  Profile,
  Right,
  TrackProduct,
  Wallet,
} from "./components";
import VerifyUser from "./components/VerifyUser";
import ErrorComponent from "./components/ErrorComponent";
//import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </main>
    </>
  );
}

function DashboardRoutes() {
  return (
    <div className="flex flex-col h-screen">
      {/* Your existing dashboard structure */}
      <div className="flex bg-slate-100 h-[90%]">
        <div className="basis-1/6">
          <Left />
        </div>
        <div className="basis-4/6">
          <Routes>
            <Route index element={<Main />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="track-product" element={<TrackProduct />} />
            <Route path="product-history" element={<ProductHistory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="verify-user" element={<VerifyUser />} />
            <Route path="logout" element={<Logout />} />
            <Route path="error" element={<ErrorComponent />} />
          </Routes>
        </div>
        <div className="basis-1/6">
          <Right />
        </div>
      </div>
      <Footer />
    </div>
  );
}

//import React from "react";
/*import { Route, Routes } from "react-router-dom";
import { Login, Wallet } from "./components";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

//import  from 'react'
/*import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };
  return (
    <main className="flex justify-center items-center bg-slate-400 h-screen">
      <div className="w-[650px] h-[400px] bg-white rounded-lg flex flex-col justify-center items-center">
        <p className="text-[#00714F] text-[32px] font-bold">Agrichain</p>
        <button onClick={handleClick}>Submit</button>
      </div>
    </main>
  );
}*/

/*export default function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-300">
      <div className="flex justify-center items-center w-[50%] h-[50%] bg-white rounded-xl text-black">
        <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </a>
            </span>
          </h1>

          <p className="description">
            Get started by configuring your desired network in{" "}
            <code className="code">src/index.js</code>, then modify the{" "}
            <code className="code">src/App.js</code> file!
          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="grid">
          <a
            href="https://portal.thirdweb.com/"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Portal ➜</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Dashboard ➜</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/templates"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Templates ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
*/
