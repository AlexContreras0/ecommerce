import React, { useEffect, useState } from "react";

export default function EditProfileFormComponent() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    phone: "",
    Address: "",
    CP: "",
    Locality: "",
    Province: "",
  };

  const [user, setUser] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:9000/users/${id}`);
      const jsonData = await response.json();
      setUser(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <form action="update"></form>
    </div>
  );
}
