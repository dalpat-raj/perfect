import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
    console.log("use");
    
    const sesssion = useSession();
    return sesssion.data?.user;
}