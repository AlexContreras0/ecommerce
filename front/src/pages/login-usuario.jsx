import React, { useEffect, useState } from "react";
import ClienteComponent from "@/components/ClienteComponent/ClienteComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import LoginFormAddComponent from "@/components/LoginFormAddComponent/LoginFormAddComponent";

export default function loginUser() {
  const [isUserLoged, setIsUserLoged] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isUserLogedLocalStorage = JSON.parse(
        localStorage.getItem("isUserLogedLStorage")
      );
      setIsUserLoged(isUserLogedLocalStorage);
    }
  }, []);

  return (
    <div>
      {isUserLoged ? (
        <ClienteComponent />
      ) : (
        <LoginFormAddComponent
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
        />
      )}

      <FooterComponent />
    </div>
  );
}
