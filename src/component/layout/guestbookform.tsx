"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GuestbookFormProps {
    onSubmit: (message: string, author: string) => void;
    isSignedIn: boolean;
    userName?: string;
    onSignIn: (provider?: string) => void;
    onSignOut: () => void;
}

export default function GuestbookForm({ onSubmit, isSignedIn, userName, onSignIn, onSignOut }: GuestbookFormProps) {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || !isSignedIn) return;

        setIsSubmitting(true);
        try {
            await onSubmit(message, userName || 'Anonymous');
            setMessage('');
        } catch (error) {
            console.error('Error submitting message:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleSignIn = () => {
        onSignIn('google');
    };

    const handleGithubSignIn = () => {
        onSignIn('github');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div className="bg-stone-900/60 backdrop-blur-md border border-stone-800/90 rounded-lg p-6 ">
                <h2 className="text-md font-bold text-white text-center mb-1">
                    Leave a Message
                </h2>
                {/* <br /> */}
                {!isSignedIn ? (
                    <div className="text-center text-md text-zinc-300">
                        <div className="mb-6">
                            Pick your poison, sign in, and drop some words in the guestbook!
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            {/* Google Sign In */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleGoogleSignIn}
                                className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 pointer-events-auto min-w-[140px]"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </motion.button>

                            {/* GitHub Sign In */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleGithubSignIn}
                                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 pointer-events-auto min-w-[140px] border border-gray-700"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </motion.button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-zinc-300">
                                Signed in as <span className="text-white text-md">{userName}</span>
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onSignOut}
                                className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 pointer-events-auto"
                            >
                                Sign out
                            </motion.button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="message" className="block text-zinc-300 text-md  mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Share your thoughts, memories, or just say hello..."
                                    className="w-full px-4 py-3 bg-stone-800/50 border border-stone-700/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ea698b] focus:border-transparent resize-none pointer-events-auto"
                                    rows={4}
                                    maxLength={500}
                                    required
                                />
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-zinc-400">
                                        {message.length}/500 characters
                                    </span>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={!message.trim() || isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-lg text-md transition-all duration-200 pointer-events-auto ${!message.trim() || isSubmitting
                                    ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                                    : 'bg-[#ea698b] text-white hover:bg-[#d85a7a]'
                                    }`}
                            >
                                {isSubmitting ? 'Posting...' : 'Post Message'}
                            </motion.button>
                        </form>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
