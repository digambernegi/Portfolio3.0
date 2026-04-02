import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center">
            <div className="grid justify-between w-full grid-cols-6 gap-16 mb-6 md:gap-12 sm:mb-8 lg:mb-10">
                <div className="flex flex-col col-span-6 gap-4 md:col-span-2 lg:gap-8">
                    <Link to="/" className="rounded-full overflow-hidden w-10 h-10 hover:scale-[1.05] transition-all ease-primary duration-[0.25s]">
                        <img
                            className="rounded-full h-11 w-11 object-cover"
                            src="/assets/headerprofile.jpeg"
                            alt="Digamber Negi"
                            width={45}
                            height={45}
                        />
                    </Link>
                    <div className="text-[var(--primary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">Hi, I'm
                        <Link className="text-sm text-[var(--secondary-text)] dark:text-[var(--dark-primary-text)]" to="/"> Digamber Negi</Link>, frontend engineer from India. Thanks for checking out my site!</div>
                    <div className="flex items-center justify-center gap-4 text-content-primary dark:text-content-primary-dark w-fit">
                        <a target="_blank" href="https://github.com/digambernegi"
                            rel="noopener noreferrer">
                            <img
                                title="GitHub"
                                className="flex items-center justify-center w-6 h-6 dark:invert"
                                src="/assets/git.svg"
                                alt="gitHub"
                                width={45}
                                height={45}
                            /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/digamber-negi-5b2296135/"
                            rel="noopener noreferrer">
                            <img
                                title="LinkedIn"
                                className="flex items-center justify-center w-6 h-6 dark:invert"
                                src="/assets/linkedIn.svg"
                                alt="linkedIn"
                                width={45}
                                height={45}
                            /></a>
                    </div>
                    <div className="text-sm text-[var(--secondary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">©2026 All rights reserved.</div>
                </div>



                <div className="flex flex-col col-span-2 gap-4 w-fit md:col-span-1">
                    <h4 className="text-[var(--primary-text)]  dark:text-[var(--dark-primary-text)] text-cursor">General</h4>
                    <div className="flex flex-col gap-4">
                        <Link className="text-sm text-[var(--secondary-text)] hover:text-content-primary dark:hover:text-content-primary-dark ease-primary duration-[0.25s] w-fit" to="/">Home</Link>
                        <Link className="text-sm text-[var(--secondary-text)] hover:text-content-primary dark:hover:text-content-primary-dark ease-primary duration-[0.25s] w-fit" to="/about">About</Link>
                        <Link className="text-sm text-[var(--secondary-text)] hover:text-content-primary dark:hover:text-content-primary-dark ease-primary duration-[0.25s] w-fit" to="/project">Project</Link>
                    </div>
                </div>

                <div className="flex flex-col col-span-2 gap-4 w-fit md:col-span-1">
                    <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Work</h4>
                    <div className="flex flex-col gap-4">
                        <Link className="text-sm text-[var(--secondary-text)] hover:text-content-primary dark:hover:text-content-primary-dark ease-primary duration-[0.25s] w-fit" to="/contact">Contact</Link>
                        <a className="text-sm text-[var(--secondary-text)] hover:text-content-primary dark:hover:text-content-primary-dark ease-primary duration-[0.25s] w-fit" target="_blank" href="/assets/DigamberNegi_SoftwareDeveloper_Resume.pdf">Resume</a>
                    </div>
                </div>

                <div className="flex flex-col col-span-6 gap-4 md:col-span-2 text-cursor">
                    <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">What I'm listening to</h4>
                    <div className="flex gap-4 items-start border-neutral-gray-2 rounded-lg p-4">
                        <img
                            title="Spotify"
                            className="flex items-start justify-center w-10 h-10 dark:invert"
                            src="/assets/spotify.svg"
                            alt="spotify"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col">
                            <div className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Spotify</div>
                            <h4 className="text-sm tracking-[-0.009375rem] leading-[150%] light: text-[var(--secondary-text)]">Playing</h4>
                        </div>
                    </div>
                    <iframe
                        title='Spotify Playlist'
                        className="border-radius:12px backdrop-blur h-full w-full"
                        src="https://open.spotify.com/embed/playlist/7Cq5O9cTVa1OEutcLTYm5x?utm_source=generator"
                        width="100%"
                        height="182"
                        allowFullScreen
                        allow="autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                fullscreen; 
                                picture-in-picture"
                        loading="lazy" ></iframe>
                </div>

            </div>
        </footer>
    )
}

