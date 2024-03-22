import React, { useState } from "react";
import ClientsPage from "./ClientsPage";

function AdminPage() {
  const [isClients, setIsClients] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>{isClients && <ClientsPage />}</div>
    </div>
  );
}

export default AdminPage;
