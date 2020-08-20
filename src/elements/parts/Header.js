import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
        </nav>
        <div classname="collapse nabar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={'nav-item$(getNavLinkClass("/"))'}>
              <Button className="nav-link" type="link" href="/">
                Home
              </Button>
            </li>

            <li className={'nav-item$(getNavLinkClass("/"))'}>
              <Button className="nav-link" type="link" href="/browse-by">
                Cari Kostan berdasarkan Kategori
              </Button>
            </li>

            <li className={'nav-item$(getNavLinkClass("/"))'}>
              <Button className="nav-link" type="link" href="/testimonials">
                Testimonial
              </Button>
            </li>

            <li className={'nav-item$(getNavLinkClass("/"))'}>
              <Button className="nav-link" type="link" href="/agens">
                Agen
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
