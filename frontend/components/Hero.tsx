'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from "./ui/Button";


const Hero=()=>{
    const { data: session } = useSession();
return(
    <>
    <div className='items-center'>
        <div className="text-6xl font-extrabold">
         <h1><span className="text-orange-600">In</span><span>di</span><span className="text-green-400">a's</span> First Wallet <span className="text-blue-400">Adapter🇮🇳</span> </h1>
        </div>
        <div className="text-4xl font-extrabold">
        <h3 className="text-center"><span className="text-red-400">Made In India❤️ </span> <span className="text-yellow-300">For The World🌏</span></h3>
        </div>
        <div className="text-2xl font-extrabold">
        <h4 className="text-center">Create Your Wallet in Few Click's</h4>
        </div>
        <div className='flex items-center justify-center'>
                    <Button className="flex items-center space-x-2 py-3 m-5 w-[250px] h-11 font-extrabold text-lg bg-blue-700 rounded-xl" onClick={() => signIn()}>
                        <img className="h-7 w-7" src="https://tiplink.io/logos/google.svg" alt="Google logo" />
                        <p>Sign Up with Google</p>
                    </Button>
                
             </div>
        </div>
    </>
)
};
export default Hero;