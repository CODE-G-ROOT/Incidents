import Bb_Login from '../assets/svg/Background_Log_in_.svg';
import Login from './Log_In';

export const Oficial_Login = () => {

    return (
        <>
            <div className='h-screen w-screen bg-relax absolute flex justify-between'>
                <img className='h-screen w-auto' src={Bb_Login} />
                <div className='w-2/5 h-full flex items-center'>
                    <Login />
                </div>
            </div>
        </>
    )
}