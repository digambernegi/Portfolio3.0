import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const { theme } = useTheme();

    const handleFormChange = (event: any) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            toast.error("Contact form configuration error. Please contact directly via email.");
            return;
        }
        formData.append("access_key", accessKey);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            toast.success("Sending....",
                {
                    style: {
                        borderRadius: '10px',
                        background: theme == "dark" ? '#333' : '#fff',
                        color: theme == "dark" ? '#fff' : '#333',
                    },
                }
            );
            event.target.reset();
        } else {
            toast.error(data.message,
                {
                    style: {
                        borderRadius: '10px',
                        background: theme == "dark" ? '#333' : '#fff',
                        color: theme == "dark" ? '#fff' : '#333',
                    },
                }
            );
        }
        setFormData({ name: "", email: "", message: "" });
    }


    return (
        <div className="grid w-full max-w-5xl grid-rows-[auto_1fr_auto]">
            <Header />
            <div className="animate-fadeUp flex flex-col items-center w-full gap-[5rem] my-[5rem] lg:gap-[10rem] lg:my-[8rem]">
                <div className="flex flex-col max-w-[640px] gap-8 md:gap-14">
                    <div className="flex flex-col gap-4 md:gap-6 text-cursor">
                        <h2 className="relative block text-5xl  text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Get in touch</h2>
                        <p className="text-[var(--ternary-text)] dark:text-[var(--dark-ternary-text)]">Let's connect! Whether you have an exciting project in mind or just want to chat about tech, I'd love to hear from you. Drop me a message below.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                        <div className="flex flex-col w-full gap-6 sm:flex-row">
                            <div className="relative flex flex-col w-full gap-1 text-cursor">
                                <div className="text-sm text-[var(--secondary-text)]">Name<span title="Required field"> *</span></div>
                                <input value={formData.name} onChange={handleFormChange} required title="Name" placeholder="John Doe" className="rounded-xl py-3 px-6 bg-white dark:bg-neutral-dark border border-neutral-gray-2 dark:border-neutral-gray-2-dark focus:border-content-secondary-dark dark:focus:border-content-secondary placeholder:text-content-secondary-dark dark:placeholder:text-content-secondary transition-all ease-primary duration-[0.25s] text-button outline-none font-normal dark:bg-[var(--dark-background)]" type="text" name="name" />
                            </div>
                            <div className="relative flex flex-col w-full gap-1 text-cursor">
                                <div className="text-sm text-[var(--secondary-text)]">Email<span title="Required field"> *</span>
                                </div>
                                <input value={formData.email} onChange={handleFormChange} title="Email" required placeholder="john@doe.com" className="rounded-xl py-3 px-6 bg-white dark:bg-neutral-dark border border-neutral-gray-2 dark:border-neutral-gray-2-dark focus:border-content-secondary-dark dark:focus:border-content-secondary placeholder:text-content-secondary-dark dark:placeholder:text-content-secondary transition-all ease-primary duration-[0.25s] text-button outline-none font-normal dark:bg-[var(--dark-background)]" type="text" name="email" />
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full gap-1 text-cursor">
                            <div className="text-sm text-[var(--secondary-text)]">Message<span title="Required field"> *</span>
                            </div>
                            <textarea value={formData.message} onChange={handleFormChange} name="message" required placeholder="Your message" maxLength={255}
                                className="rounded-xl py-3 px-6 bg-white dark:bg-neutral-dark border border-neutral-gray-2 dark:border-neutral-gray-2-dark focus:border-content-secondary-dark dark:focus:border-content-secondary placeholder:text-content-secondary-dark dark:placeholder:text-content-secondary transition-all ease-primary duration-[0.25s] text-button outline-none font-normal dark:bg-[var(--dark-background)]" rows={5}>
                            </textarea>
                        </div>
                        <button type="submit" className="bg-orange-500 font-medium relative flex items-center justify-center py-3 px-6 rounded-3xl transition-all ease-primary duration-[0.25s] bg-accent-1 hover:bg-accent-2 text-white w-full sm:w-fit">
                            <div className="">Send message</div></button>
                    </form>
                </div>
            </div >
            <Footer />
        </div >
    )
}

