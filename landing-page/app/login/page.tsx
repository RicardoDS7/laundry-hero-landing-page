import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {

    const {data: session} = useSession()

    if (session) {

        return (
            <div>
            <div>Welcome, session.user.email</div>
            <div>
                <button onClick={()=> signOut}>Sign out</button>
            </div>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={()=> signIn}>Sign in</button>
            </div>
        )
    }
};

export default Login;