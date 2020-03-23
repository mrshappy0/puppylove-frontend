import React from "react";

const Menu = ({ changeSelected, selected }) => {

  const handleClick = (e) => {
    changeSelected(e.target.id)
  }

  return (
    <div className="ui four item menu">
      <a
        className={"item " + (selected === "IntroTab" ? "active" : null)}
        id="IntroTab"
        onClick={handleClick}
      >
        <i className="paw large icon" id="IntroTab" />
      </a>

      <a
        className={"item " + (selected === "Bio" ? "active" : null)}
        id="Bio"
        onClick={handleClick}
      >
        <i className="info circle large icon" id="Bio" />
      </a>

      <a
        className={"item " + (selected === "Adoption" ? "active" : null)}
        id="Adoption"
        onClick={handleClick}
      >
        <i className="home large icon" id="Adoption" />
      </a>
    </div>
  );
};

export default Menu;
