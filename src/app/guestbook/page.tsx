"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react';
import { guestbookService } from '@/services/guestbookservice';
import { GuestbookMessage } from '@/db/schemas';
import GuestbookForm from '@/component/layout/guestbookform';
import GuestbookList from '@/component/layout/guestbooklist';

export default function Guestbook() {
    const { data: session, status } = useSession();
    const [messages, setMessages] = useState<GuestbookMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const isSignedIn = status === 'authenticated';
    const user = session?.user;

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        try {
            setIsLoading(true);
            const loadedMessages = await guestbookService.getMessages();
            setMessages(loadedMessages);
        } catch (error) {
            console.error('Error loading messages:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmitMessage = async (message: string, author: string) => {
        try {
            // Determine provider from user image URL or default to google
            let provider = 'google'; // default
            if (user?.image?.includes('github') || user?.image?.includes('avatars.githubusercontent.com')) {
                provider = 'github';
            }

            const newMessage = await guestbookService.addMessage(
                message,
                author,
                user?.image || undefined,
                provider
            );
            setMessages(prev => [newMessage, ...prev]);
        } catch (error) {
            console.error('Error submitting message:', error);
            throw error;
        }
    };

    const handleSignIn = async (provider?: string) => {
        if (provider) {
            await signIn(provider);
        } else {
            // Default to Google if no provider specified
            await signIn('google');
        }
    };

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className="min-h-screen py-24 lg:pt-36 flex flex-col items-center justify-cente mx-4 lg:mx-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <div className="text-xl font-bold text-white mb-4 flex flex-col items-start justify-center">
                    Guestbook
                </div>
                <div className="text-md text-zinc-300">
                    Leave a message, share your thoughts, or just say hello!
                    This is where visitors can connect and share their experiences.
                </div>
            </motion.div>

            <div className="space-y-12 w-full">
                {/* Guestbook Form */}
                <GuestbookForm
                    onSubmit={handleSubmitMessage}
                    isSignedIn={isSignedIn}
                    userName={user?.name || undefined}
                    onSignIn={handleSignIn}
                    onSignOut={handleSignOut}
                />

                {/* Guestbook Messages */}
                <GuestbookList
                    messages={messages}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}
