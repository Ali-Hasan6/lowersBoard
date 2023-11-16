import React from "react";
import { OidcSecure } from "@axa-fr/react-oidc";
import {Link} from "react-router-dom";

function Login() {
  return (
    <OidcSecure>
      <div>User</div>
      <Link to="/"><div className="  border-2 border-black w-fit p-1 rounded-md mt-3 hover:text-white hover:scale-105 hover:bg-slate-600 duration-150">Back to Main</div></Link>
    </OidcSecure>
  );
}

export default Login;
