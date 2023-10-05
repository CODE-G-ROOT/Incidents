import React from "react";
import { Link, Input, ScrollShadow, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Link as Link_Route } from "react-router-dom";
import { Modal_New_Incidence } from "./Modals";

export function Buttons_All() {

    const data = ["ID", "STATUS", "CATEGORY", "TYPE"];

    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <big className="flex justify-center relativez">
                    <Link_Route to={key.toLowerCase()} className="text-black text-base flex justify-center px-3 py-2rounded-full w-40 transition-all  " href={key.toLowerCase()} underline="focus">
                        {key}
                        <div className="h-6 w-32 absolute group flex justify-center" id="animar">
                            <div className="bg-white w-0.5 h-0.5 absolute bottom-0 transition-all group-hover:w-full group-hover:bg-black" id="adentro"></div>
                        </div>
                    </Link_Route>
                </big>
            ))
            }
        </div >
    );
};

export function Buttons_Equipment() {

    const data = ["NAME", "MARC", "CODE"];

    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <big className="flex justify-center relativez">
                    <Link_Route to={key.toLowerCase()} className="text-black text-base flex justify-center px-3 py-2rounded-full w-40 transition-all  " href={key.toLowerCase()} underline="focus">
                        {key}
                        <div className="h-6 w-32 absolute group flex justify-center" id="animar">
                            <div className="bg-white w-0.5 h-0.5 absolute bottom-0 transition-all group-hover:w-full group-hover:bg-black" id="adentro"></div>
                        </div>
                    </Link_Route>
                </big>
            ))
            }
        </div >
    );
};

export function Buttons_Location() {

    const data = ["AREA", "ROOM"];

    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <big className="flex justify-center relativez">
                    <Link_Route to={key.toLowerCase()} className="text-black text-base flex justify-center px-3 py-2rounded-full w-40 transition-all  " href={key.toLowerCase()} underline="focus">
                        {key}
                        <div className="h-6 w-32 absolute group flex justify-center" id="animar">
                            <div className="bg-white w-0.5 h-0.5 absolute bottom-0 transition-all group-hover:w-full group-hover:bg-black" id="adentro"></div>
                        </div>
                    </Link_Route>
                </big>
            ))
            }
        </div >
    );
};

export function Input_Search({ report, id, rol, name, all_id, all_status, all_category, all_type, equipment_name, marc, code, area, room }) {

    if (report) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by report id" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (id) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-black">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by id" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (rol) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by rol name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (name) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (all_id) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (all_status) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (all_category) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (marc) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (code) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (all_type) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (equipment_name) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (area) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

    else if (room) return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <Input type="email" variant="underlined" label="Search by name" className="h-20 w-96" />
            </div>
        </div>
    );

};

export function Ocult() {

    return (
        <div className="ml-96 flex z-20 space-x-10 text-center w-full fixed pt-10 px-72 bg-white">
            <div key="underlined" className="w-full h-auto  mb-6  gap-4">
                <div type="email" variant="underlined" label="Insert ID" className="h-20 w-96" />
            </div>
        </div>
    );
};

export const Button_Agregate = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const Modal_Info = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (



        <>
            <div className="absolute bottom-5 right-5">
                <button title="Add New" class="group cursor-pointer hover:rotate-90 active:scale-100 duration-200" onClick={() => Modal_Info('blur')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65px" height="65px" viewBox="0 0 24 24" class="stroke-slate-600 fill-none group-active:fill-slate-200 duration-200">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                    </svg>
                </button>
            </div>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} size="5xl" >
                <ModalContent className="bg-white ">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-5 text-white">Incidence</ModalHeader>
                            <ModalBody className="mt-96">
                                <Modal_New_Incidence></Modal_New_Incidence>
                            </ModalBody>
                            <ModalFooter>

                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="success" variant="light" onPress={onClose}>
                                    Send
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}

export const DeleteButton = () => {
    return (
        <>
            <button class="Btn">

                <div class="sign text-white"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                <div class="text">Logout</div>
            </button>

        </>
    );
};


