import { createContext, ReactNode } from "react";

const StreamVideoContext = createContext(null)

export const SteamVideoCTXProvider = ({children}: {children: ReactNode}) => {

    return (
        <StreamVideoContext.Provider value={null}>
            {children}
        </StreamVideoContext.Provider>
    )
}