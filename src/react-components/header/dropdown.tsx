import React from "react";

import { HeaderList } from "./header.tsx";
interface DropdownProps {
  toggle: boolean;
}
const Dropdown: React.FC<DropdownProps> = ({ toggle }) => {
  if (toggle) {
    return (
      <section className="nav--section nav--section-dropdown">
        <HeaderList />
      </section>
    );
  } else {
    return null;
  }
};

export default Dropdown;
