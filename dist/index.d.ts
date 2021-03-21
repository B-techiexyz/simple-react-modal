/**
 * --------------------------------------------------------------------------
 * simple-react-modal
 * Licensed under MIT (https://github.com/B-techiexyz/simple-react-modal/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
import * as React from "react";
import "./styles.scss";
export declare type ModalProps = {
    className?: string;
    visible: boolean;
    onClose?: () => void;
    onCloseOutsideClick?: boolean;
    children: React.ReactNode;
};
declare function Modal(props: ModalProps): JSX.Element | null;
export default Modal;
