import React from "react";

//? Next UI
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure  } from "@nextui-org/react";

//? SVG - ICONS
import Apple_Icon from '../assets/svg/Apple_icon_.svg';
import Google_Icon from '../assets/svg/Google_icon_.svg';
import Discord from '../assets/svg/Discord_icon_.svg';

//? SVG - ADDS
import Small_line from '../assets/svg/Small_line.svg';
import Title_line from '../assets/svg/Title_line.svg';
function Login() {

    

    const Login = async () => {
        try {
            let response = await fetch`http://192.168.110.41:5146/`;
            if (!response.ok) {
                window.location.href = "http://192.168.110.41:5146/login/redirect"
            }
        } catch (error) {
            let type = error.name;
            type == "TypeError"
                ? onOpen()
                : console.log(error.name);
        }
    };



    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const Without_access = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

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
                        className="input rounded-2xl pl-5  text-slate-600"
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        className="input rounded-2xl pl-5 text-slate-600"
                    />
                </div>
                <span
                    className="cursor-pointer w-[300px] h-[29px] text-white text-[17px] font-light font-['Sansation Light'] flex p-5"
                    onClick={() => Without_access('blur')}>
                        
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
                    <div onClick={() => Without_access('blur')}>
                        <img className="w-12 h-12 cursor-pointer" src={Apple_Icon} alt="" />
                    </div>
                    <div onClick={() => Without_access('blur')}>
                        <img className="w-10 h-14 cursor-pointer" src={Google_Icon} alt="" />
                    </div>
                </div>
            </div>
            
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent className="bg-[#596375] bg-opacity-25">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-5 text-white">Whitouth Access</ModalHeader>
                            <ModalBody>
                                <h1 className="text-white">Oops!</h1>
                                <img src="https://http.cat/401" />
                                <p className="text-white"><b>Sorry!</b>, This option is currently disabled</p>
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
}
export default Login
