//? Next UI
import { NextUIProvider, useDisclosure } from "@nextui-org/react";

//? SVG - ICONS
import Apple_Icon from '../assets/svg/Apple_icon_.svg';
import Google_Icon from '../assets/svg/Google_icon_.svg';
import Discord from '../assets/svg/Discord_icon_.svg';

//? SVG - ADDS
import Small_line from '../assets/svg/Small_line.svg';
import Big_line from '../assets/svg/Big_line.svg';
import Title_line from '../assets/svg/Title_line.svg';

//? Backgrounds
import Bb_Login from '../assets/svg/Background_Log_in_.svg';
import Bb_Panel from '../assets/svg/Background_Panel_.svg';

// //? Enviroment Variables
// import data from '../../auto_setting.js';

// const { SERVER_FRONT: { host, port } } = data;

function Login() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const Login = async () => {
        try {
            let response = await fetch`http://localhost:5146/`;
            if (response.ok) {
                window.location.href = "http://localhost:5146/login"
            }
        } catch (error) {
            let type = error.name;
            type == "TypeError"
                ? onOpen()
                : console.log(error.name);
        }
    };

    //? Cambiar el a w-full y h-full bg-relax

    return (
        <>
            <div className="w-[561px] h-[825px] bg-white bg-opacity-5 rounded-[22px] flex flex-col text-center items-center ">
                <div className="flex flex-col items-center pt-32">
                    <h1 className="w-[306px] h-[84px] text-white text-[79px] font-light font-['Sansation Light'] title">SIGN IN</h1>
                    <img
                        className="p-14"
                        src={Title_line}
                    />
                </div>
                <div className="flex flex-col space-y-10">
                    <input
                        type="text"
                        placeholder='Username'
                        className="input rounded-2xl"
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        className="input rounded-2xl"
                    />
                </div>
                <span
                    className="w-[300px] h-[29px] text-white text-[17px] font-light font-['Sansation Light'] flex p-5">
                    Forgot password ?
                </span>
                <div className="w-50 h-2 mt-14 flex flex-row items-center space-x-3">
                    <div>
                        <img
                        className="w-20 h-px border-white" src={Small_line} alt="" />
                    </div>
                    <span className="w-30 h-7 text-stone-300 text-base font-light font-['Sansation Light']">Login with social account</span>
                    <div>
                        <img className="w-20 h-px border-white" src={Small_line} alt="" />
                    </div>
                </div>
                <div className='flex flex-row align-middle mt-12 space-x-10'>
                    <div onClick={Login} className="cursor-pointer">
                        <img className="w-14 h-14" src={Discord} />
                    </div>
                    <div>
                        <img className="w-12 h-12" src={Apple_Icon} alt="" />
                    </div>
                    <div>
                        <img className="w-10 h-14" src={Google_Icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
