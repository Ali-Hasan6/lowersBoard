import React, { useState } from "react";
import { Modal, Button, ToggleSwitch } from "flowbite-react";
function FolderEditor({ openModalFolder, setOpenModalFolder }) {
    const [switch1, setSwitch1] = useState(false);
    return <div>
        <Modal dismissible show={openModalFolder} onClose={() => setOpenModalFolder(false)}>
            <Modal.Header>Add content group</Modal.Header>
            <Modal.Body className=" space-y-4">

                {/* Form Name Label */}
                <div>
                    <form>
                        <input 
                        placeholder="Name*" 
                        type="text"
                        className=" w-full bg-gray-200 placeholder:text-purple-900 placeholder:font-thin placeholder:text-sm  rounded-md"
                        />
                    </form>
                </div>
                {/* Switcher: Secret Folders */}
                <div>
                    <ToggleSwitch   checked={switch1} label="Restricted access" onChange={setSwitch1} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setOpenModalFolder(false)}>Save</Button>
                <Button color="gray" onClick={() => setOpenModalFolder(false)}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </div>;
}

export default FolderEditor;
