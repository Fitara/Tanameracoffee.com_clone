import FormCategory from "./FormCategory"
export default function ModalCategory() {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <FormCategory />
                </div>
            
        </>
    )
}