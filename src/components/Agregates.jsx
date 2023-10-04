import React from "react";
import { Link, ScrollShadow, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export function Buttons_All() {

    const data = ["ID", "STATUS", "CATEGORY", "TYPE"];

    return (
        <div className="flex space-x-10 text-center w-full fixed py-5 px-72 bg-white">
            {data.map((key) => (
                <big><Link className="text-black text-2xl flex justify-center px-3 py-2 hover:text-white rounded-full hover:bg-slate-600 w-40 transition-all  " href={key.toLowerCase()} underline="focus">{key}</Link></big>
            ))}
        </div>
    );
};

export function Buttons_Equipment() {

    const data = ["NAME", "MARC", "CODE"];

    return (
        <div className="flex space-x-10 text-center w-full fixed py-5 px-72 bg-white">
            {data.map((key) => (
                <big><Link className="text-black text-2xl flex justify-center px-3 py-2 hover:text-white rounded-full hover:bg-slate-600 w-40 transition-all  " href={key.toLowerCase()} underline="focus">{key}</Link></big>
            ))}
        </div>
    );
};

export function Buttons_Location() {

    const data = ["AREA", "ROOM"];

    return (
        <div className="flex space-x-10 text-center w-full fixed py-5 px-72 bg-white">
            {data.map((key) => (
                <big><Link className="text-black text-2xl flex justify-center px-3 py-2 hover:text-white rounded-full hover:bg-slate-600 w-40 transition-all  " href={key.toLowerCase()} underline="focus">{key}</Link></big>
            ))}
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

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    }, {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        message: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    },
];

export function Card() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const Modal_Info = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (
        <>
            <ScrollShadow className="w-full h-auto"
                hideScrollBar
                offset={100}
                orientation="horizontal"
            >
                <ul role="list" className="divide-y cursor-pointer divide-gray-400 m-4">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5" onClick={() => Modal_Info('blur')}>
                            <div className="flex min-w-0 gap-x-4">
                                {/* imagen */}
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                {/* name e email */}
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                </div>
                            </div>

                            {/* message */}
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                {/* <p className="text-sm leading-6 text-gray-900">{person.role}</p> */}

                                {/* fecha de publicación */}
                                {person.lastSeen ? (
                                    <p className="mt-1 mr-10 text-xs leading-5 text-gray-500">
                                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">Online</p>
                                    </div>
                                )}
                            </div>
                        </li>

                    ))}
                </ul>
            </ScrollShadow>

            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} size="5xl" >
                <ModalContent className="bg-white ">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-5 text-white">Incidence</ModalHeader>
                            <ModalBody className="mt-80">
                                <Modal_Info_Incidence></Modal_Info_Incidence>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
};

export function Modal_Info_Incidence() {

    const equip = {
        name: "mouse",
        marc: "legion",
        code: "0007"
    };

    const locate = {
        area: "Campus",
        room: "Review"
    };




    return (
        <div className="full flex flex-col mt-20 space-y-10">
            {/* simulando un header */}
            <div className="flex w-full justify-between">
                <div className="w-full flex gap-10 justify-between">
                    <div className="flex flex-col w-1/2 gap-2">
                        <h3 className="text-2xl font-semibold leading-7 text-gray-900">ID:</h3>
                        <p className=" max-w-2xl text-xl leading-7 text-gray-500">546518</p>
                    </div>
                    <div className="w-1/2 flex flex-col gap-5 ">
                        <div className="flex space-x-20 ">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Creation</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Last Update:</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fechas y ID */}

            </div>


            {/* el body flex col*/}
            <div>
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-base font-semibold leading-7 text-gray-900">Report By:</dt>
                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Margot Foster</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Backend Developer</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Equipment</dt>
                        <dd className="flex gap-20">
                            <dd className="flex gap-20">
                                {Object.keys(equip).map((data) => (
                                    <div className="">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">{data}</dt>
                                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{equip[data]}</dd>
                                    </div>
                                ))}
                            </dd>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                        <dd className="flex gap-20">
                            {Object.keys(locate).map((data) => (
                                <div className="">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">{data}</dt>
                                    <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{locate[data]}</dd>
                                </div>
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">$120,000</dd>
                    </div>
                    <div className="px-4 py-6 flex flex-col sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">DESCRIPTION</dt>
                        <dd className="mt-1 w-full text-sm leading-6 text-gray-500 justify-end">
                            <Textarea
                                isReadOnly
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-ls "
                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6 flex flex-col sm:gap-4 sm:px-0">
                        <dt className="text-sm w-full font-medium leading-6 text-gray-900">OBSERVACIÓN</dt>
                        <dd className="mt-1 w-full text-sm leading-6 text-gray-500 justify-end">
                            <Textarea
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                                className="max-w-ls"
                            />
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    )
};

export function Modal_New_Incidence() {

    const equip = {
        name: "mouse",
        marc: "legion",
        code: "0007"
    };

    const locate = {
        area: "Campus",
        room: "Review"
    };

    return (
        <div className="full flex flex-col p-20 space-y-10">
            {/* simulando un header */}
            <div className="flex w-full justify-between">
                <div className="w-full flex gap-10 justify-between">
                    <div className="flex flex-col w-1/2 gap-2">
                        <h3 className="text-2xl font-semibold leading-7 text-gray-900">ID:</h3>
                        <p className=" max-w-2xl text-xl leading-7 text-gray-500">546518</p>
                    </div>
                    <div className="w-1/2 flex flex-col gap-5 ">
                        <div className="flex space-x-20 ">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Creation</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Last Update:</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fechas y ID */}

            </div>


            {/* el body flex col*/}
            <div>
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-base font-semibold leading-7 text-gray-900">Report By:</dt>
                        <Textarea
                            labelPlacement="outside"
                            placeholder="Text"
                            defaultValue=""
                            className="max-w-ls"
                        />
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                        <Textarea
                            labelPlacement="outside"
                            placeholder="Text"
                            defaultValue=""
                            className="max-w-ls"
                        />
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                        <Textarea
                            labelPlacement="outside"
                            placeholder="Text"
                            defaultValue=""
                            className="max-w-ls"
                        />
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Equipment</dt>
                        <dd className="flex gap-2">
                            {Object.keys(equip).map((data) => (
                                <Textarea
                                    labelPlacement="outside"
                                    placeholder={data}
                                    defaultValue=""
                                    className="max-w-ls"
                                />
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                        <dd className="flex gap-2">
                            {Object.keys(locate).map((data) => (
                                <Textarea
                                    labelPlacement="outside"
                                    placeholder={data}
                                    defaultValue=""
                                    className="max-w-ls"
                                />
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <Textarea
                            labelPlacement="outside"
                            placeholder="Text"
                            defaultValue=""
                            className="max-w-ls"
                        />
                    </div>
                    <div className="px-4 py-6 flex flex-col sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">DESCRIPTION</dt>
                        <Textarea
                            labelPlacement="outside"
                            placeholder="Enter your description"
                            defaultValue=""
                            className="max-w-ls"
                        />
                    </div>
                    <div className="px-4 py-6 flex flex-col sm:gap-4 sm:px-0">
                        <dt className="text-sm w-full font-medium leading-6 text-gray-900">OBSERVACIÓN</dt>
                        <dd className="mt-1 w-full text-sm leading-6 text-gray-500 justify-end">
                            <Textarea
                                isDisabled
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue=""
                                className="max-w-ls"
                            />
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    )
};

