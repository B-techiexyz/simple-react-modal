/**
 * --------------------------------------------------------------------------
 * simple-react-modal
 * Licensed under MIT (https://github.com/B-techiexyz/simple-react-modal/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import * as React from "react";
import { useOnClick } from "./hookshelper";
import "./styles.scss";

export type ModalProps = {
  className?: string;
  visible: boolean;
  onClose?: () => void;
  onCloseOutsideClick?: boolean;
  children: React.ReactNode;
};

const { useEffect, useRef } = React

function Modal (props: ModalProps) {
  const ref: any = useRef();

  useEffect(() => {
    if (props.visible) {
      document.body.classList.add("overFlowHidden");
    }
    return () => {
      document.body.classList.remove("overFlowHidden");
    };
  }, [props.visible]);

  useOnClick(ref, () =>
    props.onCloseOutsideClick && props.onClose ? props.onClose() : undefined
  );

  return props.visible ? (
    <div className={"container"} role="presentation">
      <div className={"backDrop"} aria-hidden="true"></div>
      <div className={"innerContainer"} role="none presentation" tabIndex={-1}>
        <div className={`innerPaper ${props.className}`} ref={ref}>
          {props.children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
