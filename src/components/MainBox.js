import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selectedItem, setSelectedItem] = useState("Profile");

  const renderComponent = () => {
    switch (selectedItem) {
      case "Profile":
        return <Profile />;
      case "Photos":
        return <Photos />;
      case "Cocktails":
        return <Cocktails />;
      case "Pokemon":
        return <Pokemon />;
      default:
        return <div>Hi, I'm a div!</div>;
    }
  };

  return (
    <div>
      <MenuBar setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
      {renderComponent()}
    </div>
  );
}

export default MainBox;
