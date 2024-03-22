import React, { useState } from "react";
import ClientsPage from "./ClientsPage";
import CollectionPage from "./CollectionPage";
import RewardPage from "./RewardPage";
import SideBar from "../components/SideBar";

function AdminPage() {
  const [isClients, setIsClients] = useState(false);
  const [isCollection, setIsCollection] = useState(false);
  const [isReward, setIsReward] = useState(false);

  const handleTab = (type) => {
    if (type === "clients") {
      setIsClients(true);
      setIsCollection(false);
      setIsReward(false);
    }

    if (type === "collection") {
      setIsClients(false);
      setIsCollection(true);
      setIsReward(false);
    }

    if (type === "reward") {
      setIsClients(false);
      setIsCollection(false);
      setIsReward(true);
    }
  };

  return (
    <div>
      <SideBar handleTab={handleTab}  />
      <div className="flex justify-center items-center h-screen">
        <div>
          {isClients && <ClientsPage />}
          {isCollection && <CollectionPage/>}
          {isReward && <RewardPage/>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
