import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

export default function Login(){

    return(
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />

            </div>

        </div>
    );
};