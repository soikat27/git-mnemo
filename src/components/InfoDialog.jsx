import { useRef } from "react";

export default function InfoDialog({btnName, className, title, body, tips=null, icon}) {
    const dialogRef = useRef(null);
    
    function openDialog() {
        dialogRef.current.showModal();
    }
    function closeDialog() {
        dialogRef.current.close();
    }

    return (
        <div className="info-dialog">
            <dialog className={className} ref={dialogRef}>
                <h2>{title}</h2>
                <p className="line-item">{body}</p>
                {tips && <p>{tips}</p>}

                <button className="dialog-close" onClick={closeDialog}>Close</button>
            </dialog>

            <button className="dialog-open" onClick={openDialog}>
                <img src={icon} alt="icon" />
                {btnName}
            </button>
        </div>
    );
}