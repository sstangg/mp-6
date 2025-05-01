"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
    const { data: session} = useSession()

    return session ? (
            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
                <button type="submit">Signin with GitHub</button>
            </form>
            <div className="bg-amber-200 text-black max-w-3xl w-full space-y-8 p-6 rounded-xl border-2">
                <div className="text-center space-y-2 flex flex-col items-center">
                    <h1 className=" text-3xl font-bold tracking-tight">
                        {session.user?.email} <br />
                        {session.user?.name}
                        </h1>
                    <img width={100} height={100} src={`${session.user?.image}`} alt={`${session.user?.name} logo`} />
                    <button className="text-blue-950 p-2 bg-white border-2" onClick={() => signOut()}>Sign out</button>
                </div>
            </div>
        ):(
            <div className=" bg-amber-200 text-black max-w-3xl w-full space-y-8 p-6 rounded-xl border-2">
                <div className="text-center space-y-2 flex flex-col items-center">
                    <h1 className=" text-3xl font-bold tracking-tight">Auth.js Sign In</h1>
                    <button className=" text-blue-950 p-2 bg-white border-2" onClick={() => signIn("github")}>Sign in with GitHub</button>
                </div>
            </div>
        )
}