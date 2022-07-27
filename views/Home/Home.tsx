import React from "react";

import { AppNavBar, setItemActive } from "baseui/app-nav-bar";

export function Home() {
  const [mainItems, setMainItems] = React.useState([
    { label: "Our Vision" },
    { label: "Services" },
    { label: "Abouts Us" },
    { label: "Contact" },
  ]);

  function handleMainItemSelect(item: any) {
    setMainItems((prev) => setItemActive(prev, item));
  }

  return (
    <>
      <AppNavBar
        title="Bue Wellbeing"
        mainItems={mainItems}
        onMainItemSelect={handleMainItemSelect}
      />
    </>
  );
}
