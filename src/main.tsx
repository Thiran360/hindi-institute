import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
const domain = "YOUR_AUTH0_DOMAIN";
const clientId = "YOUR_AUTH0_CLIENT_ID";
createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </Auth0Provider>
);