"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isSignedIn: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Check for existing session on mount
    useEffect(() => {
        const savedUser = localStorage.getItem('guestbook-user');
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                setUser(userData);
                setIsSignedIn(true);
            } catch (error) {
                console.error('Error parsing saved user data:', error);
                localStorage.removeItem('guestbook-user');
            }
        }
    }, []);

    const signIn = async () => {
        try {
            // Mock Google sign-in - replace with actual Google OAuth
            const mockUser: User = {
                id: `user_${Date.now()}`,
                name: 'Demo User',
                email: 'demo@example.com',
                avatar: undefined,
            };

            setUser(mockUser);
            setIsSignedIn(true);
            localStorage.setItem('guestbook-user', JSON.stringify(mockUser));
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            setUser(null);
            setIsSignedIn(false);
            localStorage.removeItem('guestbook-user');
        } catch (error) {
            console.error('Sign out error:', error);
            throw error;
        }
    };

    const value: AuthContextType = {
        user,
        isSignedIn,
        signIn,
        signOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
