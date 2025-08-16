"use client"

import Lanyard from "@/component/layout/linyard"
import { Toast } from "@/component/layout/toast";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{
        isVisible: boolean;
        message: string;
        type: "success" | "error";
    }>({
        isVisible: false,
        message: "",
        type: "success",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mnnzynbk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setToast({
                    isVisible: true,
                    message: "Message sent successfully! I'll get back to you soon.",
                    type: "success",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setToast({
                    isVisible: true,
                    message: "Something went wrong. Please try again or email me directly.",
                    type: "error",
                });
            }
        } catch (error) {
            setToast({
                isVisible: true,
                message: "Something went wrong. Please try again or email me directly.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-start justify-start pb-10 lg:py-36 px-4 lg:px-0 overflow-x-hidden">
            <section className=" lg:block lg:absolute top-0 right-0 w-96 h-full pointer-events-auto z-10">
                <div className="w-full h-full pointer-events-auto overflow-hidden">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </div>
            </section>

            <div className="w-full max-w-full lg:max-w-[calc(100%-24rem)]">
                <section className="w-full flex flex-col justify-start items-start mb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="text-xl sm:text-xl font-medium">Contact ~</div>
                        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></div>
                            <span className="text-xs text-green-400 font-medium ml-auto">let's collaborate</span>
                        </div>
                    </div>
                    <p className="text-md sm:text-base text-zinc-300 w-full lg:w-[60%]">
                        Got a project, a question, or just wanna vibe? I'm always down to chat.
                        Hit me up through the form or connect on any platform below.
                    </p>
                </section>

                <section className="w-full flex flex-col justify-start mb-12">
                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Jane Doe"
                                className="w-full bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700 pointer-events-auto"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm text-zinc-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="you@example.com"
                                className="w-full bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700 pointer-events-auto"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm text-zinc-400 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                required
                                placeholder="What's on your mind?"
                                className="w-full bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700 resize-none pointer-events-auto"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-stone-800 hover:bg-stone-700 disabled:bg-stone-900 disabled:cursor-not-allowed transition-colors rounded-lg px-4 py-2 text-white font-medium pointer-events-auto"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </section>

                <section className="w-full flex flex-col justify-start">
                    <h3 className="text-lg sm:text-xl font-medium mb-6">Find me here ~</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-6 lg:gap-x-12">
                        <div className="min-w-0">
                            <p className="mb-2 text-zinc-400 font-semibold text-sm">Email</p>
                            <a
                                href="mailto:zoro.devx@gmail.com"
                                className="text-white hover:opacity-80 transition-opacity underline pointer-events-auto break-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                zoro.devx@gmail.com
                            </a>
                        </div>
                        <div className="min-w-0">
                            <p className="mb-2 text-zinc-400 font-semibold text-sm">GitHub</p>
                            <a
                                href="https://github.com/Zorochan404"
                                className="text-white hover:opacity-80 transition-opacity underline pointer-events-auto break-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @Zorochan404
                            </a>
                        </div>
                        <div className="min-w-0">
                            <p className="mb-2 text-zinc-400 font-semibold text-sm">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/jyotirmoy-ganguly/"
                                className="text-white hover:opacity-80 transition-opacity underline pointer-events-auto break-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @Jyotirmoy
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Toast
                isVisible={toast.isVisible}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
            />
        </div>
    )
}