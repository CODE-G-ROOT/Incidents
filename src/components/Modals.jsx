import React, { useState, useEffect, ReactDOM } from "react";
import { Textarea, Spacer } from "@nextui-org/react";
import axios from 'axios';

import { CustomCard } from "./Card";

export function Modal_Info_Incidence(key) {

    const { info } = key;
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5146/incidencias/all')
            .then(function (response) {
                setApiData(response.data[info]);
                setLoading(false);
            })
            .catch(function (error) {
                console.error(error); // Cambia console.log a console.error para resaltar errores
                setLoading(false);
            });
    }, [info]);

    if (loading) {

        return (
            <div className="flex mt-0 pt-0">
                <CustomCard className="mt-0 pt-0" />
                <Spacer x={1} />
            </div>
        );
    }


    return (
        <>
            {[apiData].map((key) => (
                <div className="flex flex-col h-full w-full px-20 bg-white">
                    <div className="flex w-full py-5 justify-between">
                        <h3 className="text-2xl font-semibold leading-7 text-gray-900">ID:</h3>
                        <p className=" max-w-2xl text-xl leading-7 text-gray-500">{apiData.id}</p>
                    </div>


                    {/* el body flex col*/}
                    <div className="w-full">
                        <dl className="divide-y divide-gray-100">
                            <div className="py-1 flex justify-between">
                                <dt className="text-base font-semibold leading-7 text-gray-900">Report By:</dt>
                                <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.report_by[0].name}</dd>
                            </div>
                            <div className="py-1 flex justify-between">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                                <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.category}</dd>
                            </div>
                            <div className="py-1 flex justify-between">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                                <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.type}</dd>
                            </div>
                            <div className="py-1 flex justify-between">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Equipment</dt>
                                <dd className="flex gap-20">
                                    <dd className="flex gap-20" >
                                        {Object.keys(apiData.equipment).map((key_2) => (
                                            <div className="flex justify-between">
                                                <div className="w-[0.1px] h-full bg-slate-400 mr-5 "></div>
                                                <div>
                                                    <dt className="text-sm font-medium leading-6 text-gray-700" >{key_2}</dt>
                                                    <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500" >{apiData.equipment[key_2]}</dd>
                                                </div>
                                            </div>
                                        ))}
                                    </dd>
                                </dd>
                            </div>
                            <div className="py-1 flex justify-between ">
                                <dt className="text-sm font-medium leading-6 text-gray-900 w-1/4">Location</dt>
                                {Object.keys(apiData.location).map((key_2) => (
                                    <div className="">
                                        <dt className="text-sm font-medium leading-6 text-gray-700" >{key_2}</dt>
                                        <dd className="mt-1 max-w-2xl text-sm leading-6 text-gray-500" >{apiData.location[key_2]}</dd>
                                    </div>
                                ))}
                            </div>

                            <div className="py-1 flex flex-col justify-between ">
                                <dt className="text-sm font-medium leading-6 text-gray-900">DESCRIPTION</dt>
                                <dd className="text-sm p-0 font-medium leading-6 text-gray-500 w-full">
                                    <Textarea
                                        isReadOnly
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        defaultValue={apiData.description}
                                        className="w-100 h-auto m-0 p-0"
                                    />
                                </dd>
                            </div>
                            <div className="py-1 flex flex-col justify-between ">
                                <dt className="text-sm font-medium leading-6 text-gray-900">OBSERVATION</dt>
                                <dd className="text-sm p-0 font-medium leading-6 text-gray-500 w-full">
                                    <Textarea
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        defaultValue={apiData.observation}
                                        className="w-100 h-auto m-0 p-0"
                                    />
                                </dd>
                            </div>
                            <div className="w-full flex flex-col gap-5 pb-5">
                                <div className="flex justify-between ">
                                    <div className=" sm:px-0">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Creation</h3>
                                        <div className="flex gap-5">
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.creation_date.date}</p>
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.creation_date.hour}</p>
                                        </div>
                                    </div>
                                    <div className=" sm:px-0">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Last Update:</h3>
                                        <div className="flex gap-5">
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.update_date.date}</p>
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.update_date.hour}</p>
                                        </div>
                                    </div>
                                    <div className=" sm:px-0">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Close Date:</h3>
                                        <div className="flex gap-5">
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.close_date.date}</p>
                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{apiData.close_date.hour}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>

                </div>
            ))}

        </>


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
