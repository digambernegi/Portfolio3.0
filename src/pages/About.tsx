import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About() {
    return (
        <div className="grid w-full max-w-5xl grid-rows-[auto_1fr_auto]">
            <Header />
            <div className="animate-fadeUp flex flex-col items-center w-full gap-[5rem] my-[5rem] lg:gap-[10rem] lg:my-[8rem]">
                <div className="flex flex-col gap-8 md:gap-14" >
                    <h2 className="relative block text-5xl text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">About me</h2>
                    <div className="flex flex-col-reverse grid-cols-2 gap-6 md:grid md:gap-20">
                        <div className="flex flex-col gap-4">
                            <p className='text-[var(--secondary-text)] text-cursor'>I'm Digamber Negi, a Frontend Engineer with 3+ years of experience building production-ready web and mobile applications. Currently working as Software Engineer (Frontend) at Aptlogica Technologies, where I lead a team of 3 developers in building scalable frontend solutions.</p>
                            <p className='text-[var(--secondary-text)] text-cursor'>I specialize in building interactive, scalable, and efficient web applications using modern frameworks like
                                <a className="text-[var(--primary-text)] dark:text-[var(--dark-secondary-text)] hover:text-orange-400" target="_blank" href="https://react.dev/" rel="noopener noreferrer"> React.js</a>,
                                <a className="text-[var(--primary-text)] dark:text-[var(--dark-secondary-text)] hover:text-orange-400" target="_blank" href="https://www.typescriptlang.org/" rel="noopener noreferrer"> TypeScript</a>,
                                <a className="text-[var(--primary-text)] dark:text-[var(--dark-secondary-text)] hover:text-orange-400" target="_blank" href="https://flutter.dev/" rel="noopener noreferrer"> Flutter</a>, and
                                <a className="text-[var(--primary-text)] dark:text-[var(--dark-secondary-text)] hover:text-orange-400" target="_blank" href="https://nextjs.org/" rel="noopener noreferrer"> Next.js</a>.
                            </p>
                            <p className='text-[var(--secondary-text)] text-cursor'>I'm deeply passionate about crafting seamless user experiences and designing high-performance applications. My work spans production mobile applications deployed on Play Store and App Store, e-learning platforms, 3D visualization tools, and data management systems.</p>
                            <p className='text-[var(--secondary-text)] text-cursor'>Collaboration is a core value in my approach, and I thrive in diverse teams where I can contribute to solving challenging problems and delivering impactful solutions. Clear communication and teamwork have always been pivotal in my professional journey.</p>
                        </div>

                        <div className="flex flex-col gap-6 sm:gap-8">
                            <div className="relative w-full overflow-hidden border rounded-lg aspect-square sm:aspect-[3/3]">
                                <img
                                    src="/assets/aboutprofile.jpg"
                                    alt="Digamber Negi"
                                    className="object-cover w-full h-full object-top"
                                />
                            </div>
                            <div className="flex flex-col grid-cols-2 gap-4 sm:grid sm:gap-8">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-[var(--secondary-text)] text-cursor">Email</p>
                                    <a target="_blank" className="break-words hover:text-orange-400" href="mailto:digambernegi001@gmail.com" rel="noopener noreferrer">digambernegi001@gmail.com</a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-[var(--secondary-text)] text-cursor">Phone</p>
                                    <a target="_blank" className="break-words hover:text-orange-400" href="tel:+91 7843 0190 72" rel="noopener noreferrer">+91 7843 0190 72</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-8 md:gap-14">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className='text-2xl text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor'>Experience</h3>
                        <a target="_blank" download="/assets/Digamber Negi - Frontend Engineer.pdf" href="/assets/Digamber Negi - Frontend Engineer.pdf">
                            <button className="text-button font-medium relative flex items-center justify-center py-3 px-6 rounded-3xl transition-all ease-primary duration-[0.25s] border border-neutral-gray-2 dark:border-0 dark:bg-[var(--border)] hover:bg-neutral-gray-3 dark:hover:bg-orange-400 hover:bg-orange-400 h-full w-full">
                                <div className="dark:text-[var(--dark-pimrary-text)]">Download CV</div></button></a>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 pb-6 border-b md:gap-10 md:pb-8 md:flex-row border-b-neutral-gray-2 dark:border-b-neutral-gray-2-dark">
                            <p className="text-[var(--ternary-text)] md:max-w-60 md:w-full dark:text-[var(--dark-ternary-text)] text-cursor">May 2022 – Present</p>
                            <div className="flex flex-col gap-4 md:gap-6">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">Aptlogica Technologies Pvt Ltd</h4>
                                    <p className="text-sm text-[var(--secondary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">Software Engineer (Frontend)</p>
                                </div>
                                <div className="text-[var(--ternary-text)] dark:text-[var(--dark-ternary-text)] text-cursor">
                                    <span className=''>Leading a team of 3 developers in building scalable frontend solutions. Contributing to diverse projects including production mobile applications, e-learning platforms, 3D visualization tools, and data management systems.</span>
                                    <ul className="pl-4 list-disc">
                                        <li>Leading team of 3 developers in building scalable role-based SaaS data management platform, improving dataset rendering performance by 60% using virtualization</li>
                                        <li>Built and deployed full-featured cross-platform podcast application using Flutter, successfully published on Google Play Store and Apple App Store with 5K+ downloads</li>
                                        <li>Developed comprehensive e-learning course editor with Web Components, creating 6+ reusable components (MCQ, WYSIWYG editors, catalog widgets) with live preview functionality</li>
                                        <li>Created interactive 3D visualization application using Three.js, enabling users to explore product components through immersive 3D models</li>
                                        <li>Implemented global state management using Zustand and optimized API data handling with TanStack Query, reducing API calls by 40%</li>
                                        <li>Mentoring 2 junior developers, improving team productivity by 30%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-4 pb-6 border-b md:gap-10 md:pb-8 md:flex-row border-b-neutral-gray-2 dark:border-b-neutral-gray-2-dark">
                            <p className="text-[var(--ternary-text)] md:max-w-60 md:w-full dark:text-[var(--dark-ternary-text)] text-cursor">Feb 2022 – May 2022</p>
                            <div className="flex flex-col gap-4 md:gap-6">
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] text-cursor">LeadForNeeds</h4>
                                    <p className="text-sm text-[var(--secondary-text)] dark:text-[var(--dark-secondary-text)] text-cursor">Frontend Developer (Remote Intern)</p>
                                </div>
                                <div className="text-[var(--ternary-text)] dark:text-[var(--dark-ternary-text)] text-cursor">
                                    <span className=''>Gained hands-on experience in full-stack web development, building multiple dynamic and user-friendly web applications.</span>
                                    <ul className="pl-4 list-disc">
                                        <li>Developed UI components using ReactJs, NextJs, and Tailwind CSS to create dynamic and responsive web applications</li>
                                        <li>Built a similar Hotstar clone, implementing key UI features for seamless navigation and content display</li>
                                        <li>Designed and developed a Resume Builder UI, enabling users to create and customize professional resumes with an intuitive interface</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col w-full gap-8 md:gap-14 text-cursor">
                    <h3 className="text-2xl text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] ">Tools & Technologies</h3>
                    <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
                        {/* Design */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="Figma"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/assets/figma.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Figma</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">Design</p>
                            </div>
                        </div>

                        {/* Frontend Frameworks */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="React"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/assets/reactjs.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">React Ecosystem</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">React.js, Next.js</p>
                            </div>
                        </div>

                        {/* Mobile Development */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="Mobile Development"
                                    loading="lazy"
                                    width={50}
                                    height={50} decoding="async"
                                    src="/assets/flutter.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Mobile Development</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">React Native, Flutter</p>
                            </div>
                        </div>

                        {/* Development Tools */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="Development Tools"
                                    loading="lazy"
                                    width={50}
                                    height={50} decoding="async"
                                    src="/assets/vscode.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Development Tools</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">Postman, Git Desktop, Visual Studio Code</p>
                            </div>
                        </div>

                        {/* Frontend Technologies */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="Frontend Technologies"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/assets/html.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">Frontend Technologies</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">HTML, CSS, Tailwind, Web Components</p>
                            </div>
                        </div>

                        {/* State Management & Data Fetching */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="TanStack Query"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/assets/state-management.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">State Management & Data Fetching</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">TanStack Query, Zustand, Redux</p>
                            </div>
                        </div>

                        {/* 3D & Visualization */}
                        <div className="flex items-center gap-6 pb-6 border-b md:pb-8 border-b-[var(--border)] dark:border-b-[var(--dark-border)]">
                            <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                                <img
                                    className="object-contain h-14 w-14 p-1"
                                    alt="Three.js"
                                    loading="lazy"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/assets/Three.js.svg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[var(--primary-text)] dark:text-[var(--dark-primary-text)]">3D & Visualization</h4>
                                <p className="text-[var(--secondary-text)] dark:text-[var(--dark-ternary-text)]">Three.js, WebGL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

