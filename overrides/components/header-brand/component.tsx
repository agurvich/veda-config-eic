import React, { useLayoutEffect } from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { Link } from "$veda-ui/react-router-dom";

import BrandLogo from "./logo.png";

const Brand = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${glsp()};

  a {
    &,
    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${glsp(0.5, 0.875)};
  width: 6rem;
  span {
    font-weight: ${themeVal("type.base.bold")};
    letter-spacing: -0.025em;
    font-size: 1rem;
    line-height: 1.125rem;
  }
`;

export default function HeaderComponent() {
  useLayoutEffect(() => {
    const link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&display=swap"
    );
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
  }, []);

  return (
    <Brand>
      <Link to="/">
        <Logo>
          <img
            src={BrandLogo}
            alt="brand logo"
          />
        </Logo>
      </Link>
    </Brand>
  );
}
