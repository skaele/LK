import React, { useEffect } from "react";
import styled from "styled-components";
import { popUpMessageModel } from "../../../entities/pop-up-message";
import { Colors } from "../../../shared/consts";

const PopUpMessageWrapper = styled.div<{ isOpen: boolean; color: string }>`
  width: 300px;
  border-radius: var(--brLight);
  background: ${({ color }) => Colors[color].darkTransparent};
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
  transform: translateY(${({ isOpen }) => (isOpen ? "0px" : "-20px")});
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  padding: 10px;
  text-align: left;
  color: ${({ color }) => Colors[color].main};
  font-weight: 600;
`;

const PopUpMessage = () => {
  const { isOpen, message, type } =
    popUpMessageModel.selectors.usePopUpMessage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        popUpMessageModel.events.openPopUpMessage({ isOpen: !isOpen });
      }, 2000);
    }
  }, [isOpen]);

  return (
    <PopUpMessageWrapper
      isOpen={isOpen}
      color={type === "success" ? "green" : "red"}
    >
      {message}
    </PopUpMessageWrapper>
  );
};

export default PopUpMessage;
