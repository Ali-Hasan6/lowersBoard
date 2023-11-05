import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import Editor from './Editor';

function ModalEditor({setOpenModal,openModal }) {

    return (
        <>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add new web document</Modal.Header>
                <Modal.Body className=" space-y-4">

                    {/* Name and Description */}
                    <div className=" space-y-6">
                        <input
                            type="text"
                            placeholder="Name*"
                            className=" w-full bg-gray-200 placeholder:text-purple-900 placeholder:font-thin placeholder:text-sm  rounded-md" />
                        <input
                            type="text"
                            placeholder="Description*"
                            className=" w-full bg-gray-200 placeholder:text-purple-900 placeholder:font-thin placeholder:text-sm outline-none rounded-md" />
                    </div>

                    {/* Content: Editor */}
                    <div>
                        <Editor />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Save</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditor;
