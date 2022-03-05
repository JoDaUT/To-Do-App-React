import { createPortal } from "react-dom";
import "./Modal.css";

export function Modal(props) {
	const modal = <div className="modal">{props.children}</div>;
	return createPortal(modal, document.getElementById("modal-root"));
}
