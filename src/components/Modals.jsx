import React from "react";
import { Textarea } from "@nextui-org/react";

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
        <div className="full flex flex-col p-14 mt-20 space-y-10">
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
        <div className="full flex flex-col p-14 mt-20 space-y-10">
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
                        <dd dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">ASDFKJASDLFÑKJ</dd>
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
