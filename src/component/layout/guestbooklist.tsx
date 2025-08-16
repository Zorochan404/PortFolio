"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GuestbookMessage } from '@/db/schemas';
import GuestbookEntry from './guestbookentry';

interface GuestbookListProps {
    messages: GuestbookMessage[];
    isLoading?: boolean;
}

export default function GuestbookList({ messages, isLoading = false }: GuestbookListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const messagesPerPage = 5;

    const totalPages = Math.ceil(messages.length / messagesPerPage);
    const startIndex = (currentPage - 1) * messagesPerPage;
    const endIndex = startIndex + messagesPerPage;
    const currentMessages = messages.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return (
            <div className="w-full">
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ea698b] mx-auto mb-4"></div>
                    <p className="text-zinc-400">Loading messages...</p>
                </div>
            </div>
        );
    }

    if (messages.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full mx-auto text-center py-12"
            >
                <div className="bg-stone-900/40 backdrop-blur-md border border-stone-800/50 rounded-lg p-8">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No messages yet</h3>
                    <p className="text-zinc-400">
                        Be the first to leave a message in the guestbook!
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Messages Count */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                    Guestbook Messages
                </h2>
                <p className="text-zinc-400">
                    {messages.length} message{messages.length !== 1 ? 's' : ''} from visitors
                </p>
            </div>

            {/* Messages List */}
            <div className="space-y-6 mb-8">
                <AnimatePresence mode="wait">
                    {currentMessages.map((message, index) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <GuestbookEntry {...message} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === 1
                            ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                            : 'bg-stone-800/50 text-white hover:bg-stone-700/50 border border-stone-700/50'
                            }`}
                    >
                        Previous
                    </motion.button>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <motion.button
                                key={page}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${currentPage === page
                                    ? 'bg-[#ea698b] text-white'
                                    : 'bg-stone-800/50 text-zinc-300 hover:bg-stone-700/50 border border-stone-700/50'
                                    }`}
                            >
                                {page}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === totalPages
                            ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                            : 'bg-stone-800/50 text-white hover:bg-stone-700/50 border border-stone-700/50'
                            }`}
                    >
                        Next
                    </motion.button>
                </div>
            )}
        </div>
    );
}
