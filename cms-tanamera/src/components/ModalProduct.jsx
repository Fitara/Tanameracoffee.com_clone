import FormProduct from "./FormProduct"
export default function ModalProduct() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <FormProduct />
                </div>
            
        </>
    )
}