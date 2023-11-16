import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Navbar from "./components/Navbar";
import { OidcProvider } from "@axa-fr/react-oidc";
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";


const configuration = {
  client_id: "interactive.public.short",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback",
  scope: "openid profile email api offline_access", // offline_access scope allow your client to retrieve the refresh_token
  authority: "https://demo.duendesoftware.com",
  service_worker_relative_url: "/OidcServiceWorker.js", // just comment that line to disable service worker mode
  service_worker_only: false,
  demonstrating_proof_of_possession: false, // demonstrating proof of possession will work only if access_token is accessible from the client (This is because WebCrypto API is not available inside a Service Worker)
};

function App() {



  return (
    <OidcProvider configuration={configuration}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logged" element={<Login />} />
        
      </Routes>
    </OidcProvider>
  )
}

export default App;
