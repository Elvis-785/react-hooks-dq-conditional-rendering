import React from "react";

function MenuBar({ setSelectedItem, selectedItem }) {

  const menuItems = [
    { name: "Profile", icon: "user" },
    { name: "Photos", icon: "photo" },
    { name: "Cocktails", icon: "cocktail" },
    { name: "Pokemon", icon: "themeisle" },
  ];

  return (
    <div className="ui four item menu">
      {menuItems.map((item) => (
        <span
          key={item.name}
          className={`item ${selectedItem === item.name ? "active" : ""}`}
          onClick={() => setSelectedItem(item.name)}
        >
          <i className={`${item.icon} large icon`} />
        </span>
      ))}
    </div>
  );
}

export default MenuBar;
