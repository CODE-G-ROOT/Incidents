import React from "react";

import { useRouteError } from "react-router-dom";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export function Error_401() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('blur')


    const backdrops = ["blur"];

    const Without_access = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {backdrops.map((b) => (
                    <Button
                        key={b}
                        variant="flat"
                        color="warning"
                        onPress={() => Without_access(b)}
                        className="capitalize"
                    >
                        {b}
                    </Button>
                ))}
            </div>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Whitouth Access</ModalHeader>
                            <ModalBody>
                                <h1>Oops!</h1>
                                <img src="https://http.cat/402" />
                                <p><b>Sorry!</b>, you don't have server access</p>
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
    );
};

export function Error_404() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export function Error_Page_404() {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <div class="bg-gray-800">
                <div class="h-screen flex flex-col justify-center items-center">
                    <h1 class="text-8xl font-bold text-white">
                        <b>{error.status}</b>
                    </h1>
                    <p class="text-4xl font-medium text-white">{error.statusText}</p>
                    <p class="text-4xl font-medium text-white">{error.message}</p>
                    <a href="/" class="mt-4 text-xl text-blue-600 hover:underline">Go back home</a>
                </div>
            </div>
        </>
    )
}


