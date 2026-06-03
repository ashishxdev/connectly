import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser.js";
import { BellIcon, LogOutIcon, SparklesIcon } from "lucide-react";
import useLogout from "../hooks/useLogout";
import ThemeSelector from "./ThemeSelector.jsx";

const Navbar = () => {
    const { authUser } = useAuthUser();
    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");

    const { logoutMutation } = useLogout();

    return (
        <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end w-full">
                    {/* LOGO - ONLY IN THE CHAT PAGE */}
                    {isChatPage && (
                        <div className="pl-5">
                            <Link to="/" className="flex items-center gap-2.5">
                                <div className="size-10 rounded-xl bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                                    <SparklesIcon className="size-5 text-white animate-pulse" />
                                </div>
                                <span className="text-3xl font-extrabold font-display tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent">
                                    Connectly
                                </span>
                            </Link>
                        </div>
                    )}

                    <div className="flex items-center gap-3 sm:gap-4 ml-auto">
                        <Link to={"/notifications"}>
                            <button className="btn btn-ghost btn-circle">
                                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                            </button>
                        </Link>
                    </div>

                    {/* TODO */}
                    <ThemeSelector />

                    <div className="avatar">
                        <div className="w-9 rounded-full">
                            <img src={authUser?.profilePic} alt="User Avatar" rel="noreferrer" />
                        </div>
                    </div>

                    {/* Logout button */}
                    <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
                        <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;