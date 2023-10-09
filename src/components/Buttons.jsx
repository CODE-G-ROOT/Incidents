import React, { useState } from "react";
import { Link, Input, ScrollShadow, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import { Link as div } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal_New_Incidence } from "./Modals";

export function Buttons_All() {
    const [inputValues, setInputValues] = useState({
        ID: '',
        STATUS: '',
        CATEGORY: '',
        TYPE: '',
    });

    const data = ["ID", "STATUS", "CATEGORY", "TYPE"];

    const handleChange = (event, key) => {
        setInputValues({
            ...inputValues,
            [key]: event.target.value,
        });
    };

    const handleKeyPress = (event, key) => {
        if (event.key === 'Enter') {
            console.log(`Valor del input ${key}:`, inputValues[key]);
        }
    };



    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <div key={key}>
                    <div className="w-full flex flex-col gap-4">
                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                type="email"
                                variant="underlined"
                                label={key}
                                value={inputValues[key]}
                                onChange={(event) => handleChange(event, key)}
                                onKeyPress={(event) => handleKeyPress(event, key)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
};

export function Buttons_Equipment() {
    const data = ["NAME", "MARC", "COD"];
    const [inputValues, setInputValues] = useState({
        NAME: '',
        MARC: '',
        COD: '',
    });


    const handleChange = (event, key) => {
        setInputValues({
            ...inputValues,
            [key]: event.target.value,
        });
    };

    const handleKeyPress = (event, key) => {
        if (event.key === 'Enter') {
            console.log(`Valor del input ${key}:`, inputValues[key]);
        }
    };



    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <div key={key}>
                    <div className="w-full flex flex-col gap-4">
                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                type="email"
                                variant="underlined"
                                label={key}
                                value={inputValues[key]}
                                onChange={(event) => handleChange(event, key)}
                                onKeyPress={(event) => handleKeyPress(event, key)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
};

export function Buttons_Location() {

    const data = ["AREA", "ROOM"];
    const [inputValues, setInputValues] = useState({
        AREA: '',
        ROOM: '',
    });


    const handleChange = (event, key) => {
        setInputValues({
            ...inputValues,
            [key]: event.target.value,
        });
    };

    const handleKeyPress = (event, key) => {
        if (event.key === 'Enter') {
            console.log(`Valor del input ${key}:`, inputValues[key]);
        }
    };



    return (
        <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
            {data.map((key) => (
                <div key={key}>
                    <div className="w-full flex flex-col gap-4">
                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                                type="email"
                                variant="underlined"
                                label={key}
                                value={inputValues[key]}
                                onChange={(event) => handleChange(event, key)}
                                onKeyPress={(event) => handleKeyPress(event, key)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
};

export function Input_Search({ report, id, rol, name, all_id, all_status, all_category, all_type, equipment_name, marc, code, area, room }) {

    if (report) {
        const [inputValue, setInputValue] = useState('');
        const data = ["REPORT"];
        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/admin/reports?id=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (id) {
        const [inputValue, setInputValue] = useState('');
        const data = ["ID"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/users/all?id=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (rol) {
        const [inputValue, setInputValue] = useState('');
        const data = ["ID"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/users/all?rol=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (name) {
        const [inputValue, setInputValue] = useState('');
        const data = ["NAME"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/users?name=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }




    else if (all_id) {
        const [inputValue, setInputValue] = useState('');
        const data = ["ID"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/all?id=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (all_status) {
        const [inputValue, setInputValue] = useState('');
        const data = ["STATUS"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/all?status=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (all_category) {
        const [inputValue, setInputValue] = useState('');
        const data = ["CATEGORY"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/all?category=${inputValue.toLowerCase()}`);
            }
        };
        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (marc) {
        const [inputValue, setInputValue] = useState('');
        const data = ["MARC"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/equipment?marc=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (code) {
        const [inputValue, setInputValue] = useState('');
        const data = ["CODE"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/equipment?code=${inputValue.toLowerCase()}`);
            }
        };
        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (all_type) {
        const [inputValue, setInputValue] = useState('');
        const data = ["TYPE"];
        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/equipment?type=${inputValue.toLowerCase()}`);
            }
        };
        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (equipment_name) {
        const [inputValue, setInputValue] = useState('');
        const data = ["NAME"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/equipment?name=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (area) {
        const [inputValue, setInputValue] = useState('');
        const data = ["AREA"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/location?area=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }

    else if (room) {
        const [inputValue, setInputValue] = useState('');
        const data = ["ROOM"];

        const history = useNavigate();

        const handleChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log('Valor del input:', inputValue);

                // Redirigir a la página correspondiente usando react-router-dom
                history(`/incidencias/location?room=${inputValue.toLowerCase()}`);
            }
        };

        return (
            <div className="ml-96 z-20 flex space-x-20 text-center w-full fixed  pt-10 px-72 ">
                {data.map((key) => (
                    <div key={key}>
                        <div className="w-full flex flex-col gap-4">
                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                    type="text"
                                    variant="underlined"
                                    label={key}
                                    value={inputValue}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        )
    }
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



