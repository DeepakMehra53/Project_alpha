import React from "react";
import "./Navigation.jsx";

const links = [
  { href: "#home", text: "home", subtext: "Home" },
  { href: "#konsul_ai", text: "konsul AI", subtext: "konsul AI" },
  { href: "#yggy_platform", text: "YGGY PLATFORM", subtext: "YGGY PLATFORM" },
  { href: "#modules", text: "Modules", subtext: "Modules" },
//   { href: "#team", text: "Team", subtext: "Team" },
//   { href: "/blog", text: "blog", subtext: "blog", isHidden: true },
  { href: "#contact", text: "Contact", subtext: "Contact" },
];

const NavigationMenu = () => {
  return <>
    {links.map(({href,text,subtext,isHidden},index)=>(
        <a key={index} href={href} className={`hover_links_wrap w-inline-block ${isHidden ? 'is-hide':''}`}>
            <div className="link_anim">
                <div className="anim_wr">
                    <div>{text}</div>
                    <div className={`nav-link-down is--${index +1}`}>{subtext}</div>
                </div>
            </div>
        </a>
    ))}
    <div className="switch_wr">
        <div className="nav-link sw">Dark mode</div>
        <a href="#" className="switch w-inline-block">
            <div className="switch_circ"></div>
        </a>
    </div>
  </>;
};
export default NavigationMenu;