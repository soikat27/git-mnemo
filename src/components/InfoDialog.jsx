import { useRef } from "react";

/**
 * Reusable modal + open button used for Instruction and Value in the header.
 * @param {string} btnName - Label on the open button.
 * @param {string} title - Dialog heading.
 * @param {string} body - Main dialog copy.
 * @param {string|null} [tips=null] - Optional tip line under the body.
 * @param {string} icon - Image src for the open button.
 * @returns {JSX.Element}
 */
export default function InfoDialog({btnName, title, body, tips=null, icon}) {
    const dialogRef = useRef(null);
    
    /**
     * Open the native dialog.
     */
    function openDialog() {
        dialogRef.current.showModal();
    }

    /**
     * Close the native dialog.
     */
    function closeDialog() {
        dialogRef.current.close();
    }

    return (
        <div className="info-dialog">
            <dialog ref={dialogRef}>
                <h2>{title}</h2>
                <p className="line-item">{body}</p>
                {tips && <p><span className="tip-label">Tips: </span>{tips}</p>}

                <button className="dialog-close" onClick={closeDialog}>Close</button>
            </dialog>

            <button className="dialog-open" onClick={openDialog}>
                <img src={icon} alt="icon" />
                {btnName}
            </button>
        </div>
    );
}
