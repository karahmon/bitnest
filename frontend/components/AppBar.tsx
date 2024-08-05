"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from "./ui/Button";

const AppBar = () => {
    const { data: session } = useSession();

    return (
        <>
            <div className="border-b px-2 py-3 flex justify-between">
                <div className='h-[100px]'>
                    <img
                        src="https://res.cloudinary.com/djxgkhga5/image/upload/v1722669839/uuuypgyuazqvwqqjptqs.png"
                        alt="logo"
                        className="h-20 w-35 m-4"
                    />
                </div>
                <div>
                    {session?.user ? (
                        <Button className="flex items-center space-x-2 py-3 m-5 w-40 h-15 font-extrabold text-lg bg-blue-700 rounded-xl" onClick={() => signOut()}>
                        <img className="h-7 w-7" src="https://tiplink.io/logos/google.svg" alt="Google logo" />
                        <p>Logout</p>
                    </Button>
                ) : (
                    <Button className="flex items-center space-x-2 py-3 m-5 w-40 h-15 font-extrabold text-lg bg-blue-700 rounded-xl" onClick={() => signIn()}>
                        <img className="h-7 w-7" src="https://tiplink.io/logos/google.svg" alt="Google logo" />
                        <p>Login</p>
                    </Button>
                )}
                </div>
            </div>
        </>
    );
};

export default AppBar;