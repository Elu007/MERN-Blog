import { Footer, FooterCopyright } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsDribbble } from "react-icons/bs";

export default function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-col-1">
                    <div className="mt-5">
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>SEA's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://skelafahmedportfolio.vercel.app" target="_blank" role="noopener noreferrer">
                                    My Projects
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://investingwithelu.blogspot.com" target="_blank" role="noopener noreferrer">
                                    Blogs
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/Elu007" target="_blank" role="noopener noreferrer">
                                    GitHub
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://www.linkedin.com/in/sk-elaf-ahmed-bb85b0210" target="_blank" role="noopener noreferrer">
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/" target="_blank" role="noopener noreferrer">
                                    Privacy Policy
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href="/" target="_blank" role="noopener noreferrer">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="/" by="SEA's blog" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 justify-center">
                        <Footer.Icon href="/" icon={BsFacebook} />
                        <Footer.Icon href="/" icon={BsInstagram} />
                        <Footer.Icon href="/" icon={BsTwitterX} />
                        <Footer.Icon href="https://github.com/Elu007" icon={BsGithub} />
                        <Footer.Icon href="/" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}