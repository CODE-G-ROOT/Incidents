import React from "react";
import { ReactDOM } from "react";

import { Navbar_Admin, Navbar_User } from "./Navbar";
import { Buttons_All, Button_Agregate } from "./Agregates";
import { Card } from "./Agregates";

export const Admin_Page = () => {
    return (
        <>
            <div className="flex w-full h-[500px]">
                <div className="w-full ml-96 flex flex-col">
                    <div className="px-20 pt-32">
                        <Card></Card>
                    </div>
                </div>
                <Navbar_Admin></Navbar_Admin>
            </div>
        </>
    )
};

export const User_Page = () => {
    return (
        <>
            <div className="flex w-full h-[500px]">
                <div className="w-full ml-96 flex flex-col">
                    <div className="px-20 pt-32">
                        <Card></Card>
                    </div>
                </div>
                <Navbar_User></Navbar_User>
                <div className="fixed bottom-4 right-0">
                    <Button_Agregate></Button_Agregate>

                </div>
            </div>
        </>
    )
};