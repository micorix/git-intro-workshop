import React from 'react';
import theme from "./theme";
import {css} from "@emotion/react";
import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid ${theme.colors.secondary};
  
  .language-shell::before {
    content: '$ ';
    user-select: none;
  }
`

export const Layout = ({children}) => (
    <LayoutWrapper>
        <div>
            {children}
        </div>
    </LayoutWrapper>
);

export const DeckHeading = styled.h1`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.secondary};
  font-size: 10rem;
`;

export const NarrowContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const RoundedImage = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  display: block;
  margin: auto;
  object-fit: cover;
`

export const GitAreaFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => theme.colors[props.bgColor]};
  color: ${props => theme.colors[props.color]};
  width: 33.33vw;
  height: 100vh;
  font-size: 7rem;
`

export const FullFrame = styled.iframe`
  height: 100%;
  width: 100vw;
  border: none;
`
