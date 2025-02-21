/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

// Define an interface for the context's shape
interface AppContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Initialize the context with an empty object and type assertion
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AppContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to use the context in components
export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}
