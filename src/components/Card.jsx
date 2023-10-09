import React, { useEffect, useState, ReactDOM } from "react";
import { useDisclosure, ScrollShadow, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card } from "@nextui-org/react";
import { Modal_Info_Incidence } from "./Modals";


export function Card_() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque');
    const [data, setData] = useState([]);
    const [key_to_send, setKey_to_send] = useState(0);


    const Modal_Info = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    };

    const enviar = async (key) => {
        setKey_to_send(key);
        Modal_Info('blur');
    }


    useEffect(() => {
        async function fetch_data() {
            try {
                const incidence_Data = await fetch('http://localhost:5146/incidencias/all');
                const datos = await incidence_Data.json();
                setData(datos)
            } catch (error) {
                console.log(error);
            }
        }
        fetch_data();
    }, []);

    return (
        <>
            <ScrollShadow className="w-full h-auto"
                hideScrollBar
                offset={100}
                orientation="horizontal"
            >
                <ul role="list" className="divide-y cursor-pointer divide-gray-400 m-4 rounded-lg ">
                    {data.map((json) => (
                        <li className="flex justify-between gap-x-6 p-5 hover:bg-slate-300 transition-all" key={json.id - 1} onClick={() => enviar(json.id - 1)}>
                            <div className="flex min-w-0 gap-x-4 w-full">

                                <div className="flex gap-x-4 w-60 relative">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={'https://http.cat/400'} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900" key={json.report_by[0].name}>{json.report_by[0].name}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{json.report_by[0].email}</p>
                                    </div>
                                    <div className="w-[1px] h-full absolute right-0 bg-slate-400"></div>
                                </div>


                                <div className="flex justify-around w-3/5 flex-col ">
                                    <div className="w-full">
                                        <div className="flex gap-3">
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{json.equipment.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{json.location.area}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{json.status}</p>
                                        </div>
                                        <p className="mt-1 w-full truncate text-xs leading-5 text-gray-500">{json.description}</p>
                                    </div>

                                </div>
                            </div>

                            {/* message */}
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                <p className="mt-1 mr-10 text-xs leading-5 text-gray-500">{json.creation_date.date}</p>
                                <p className="mt-1 mr-10 text-xs leading-5 text-gray-500">{json.creation_date.hour}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </ScrollShadow>

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} size='5xl' >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col self-center">
                                <div className="flex flex-col items-center">
                                    <h1 className="text-slate-700">REPORT</h1>
                                    <div className="h-[0.1px] w-24 bg-slate-400"></div>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <Modal_Info_Incidence info={key_to_send} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
};

export const CustomCard = () => (
    <div className="w-full h-auto space-y-5 p-4" radius="2xl">
        <div className="h-96 w-full rounded-lg bg-default-300"></div>
        <div className="space-x-5 h-60 w-full grid grid-cols-2">
            <div className="w-full h-full space-y-5">
                <div className="h-10 w-3/5 rounded-lg bg-default-200"></div>
                <div className="h-10 w-4/5 rounded-lg bg-default-200"></div>
                <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
                <div className="h-10 w-3/5 rounded-lg bg-default-300"></div>
                <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
            </div>
            <div className="w-full h-auto space-y-5 ">
                <div className="h-10 w-3/5 rounded-lg bg-default-200"></div>
                <div className="h-10 w-4/5 rounded-lg bg-default-200"></div>
                <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
                <div className="h-10 w-3/5 rounded-lg bg-default-300"></div>
                <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
            </div>
        </div>
    </div>
);


export const Hamter = () => (
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
            <div className="hamster__body">
                <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
            </div>
        </div>
        <div className="spoke"></div>
    </div>
);