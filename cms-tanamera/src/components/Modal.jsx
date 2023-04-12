import FormProduct from "./FormProduct"
export default function Modal() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <FormProduct/>
            
            </div>
            
        </>
    )
}