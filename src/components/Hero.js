import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}
//below props will give a default background to Hero component throughtout the app
Hero.defaultProps = {
  hero: "defaultHero"
};
