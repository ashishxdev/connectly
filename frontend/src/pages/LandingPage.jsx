import React from "react";
import { Link } from "react-router";
import { 
  MessageSquareIcon, 
  VideoIcon, 
  UsersIcon, 
  ArrowRightIcon, 
  HeartIcon, 
  SparklesIcon 
} from "lucide-react";
import { useThemeStore } from "../store/useThemeStore.js";

const LandingPage = () => {
  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-100 flex flex-col" data-theme={theme}>
      {/* HEADER / NAVBAR */}
      <header className="navbar bg-base-200/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-md shadow-primary/20 hover:scale-105 transition-transform duration-300">
              <SparklesIcon className="size-4.5 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-extrabold font-display tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent">
              Connectly
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn btn-ghost btn-sm sm:btn-md normal-case font-medium">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm sm:btn-md normal-case font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 flex-1 flex items-center">
        {/* Background blobs for premium depth */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                <SparklesIcon className="size-3.5" />
                The Next-Gen Social Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Connect with the{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  world
                </span>{" "}
                instantly.
              </h1>
              <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connectly brings you closer to friends, family, and new connections. Chat in real-time, jump on crystal-clear video calls, and share moments together in a sleek, responsive workspace.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/signup"
                  className="btn btn-primary btn-lg w-full sm:w-auto normal-case font-bold group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Connectly Now
                  <ArrowRightIcon className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline btn-lg w-full sm:w-auto normal-case font-semibold"
                >
                  Welcome Back
                </Link>
              </div>

              {/* Quick stats / social proof */}
              <div className="pt-8 border-t border-base-300 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
                  <p className="text-xs opacity-70 mt-1">Real-Time Chat</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-secondary">HD</p>
                  <p className="text-xs opacity-70 mt-1">Video & Audio</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent">Free</p>
                  <p className="text-xs opacity-70 mt-1">Always Connected</p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center relative">
              {/* Glassmorphic border container */}
              <div className="relative border border-primary/20 bg-base-200/50 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-xs max-w-md sm:max-w-lg w-full transition-transform hover:scale-[1.01] duration-500">
                <img
                  src="/i.png"
                  alt="Social connection illustration"
                  className="w-full h-auto object-contain rounded-xl"
                />
                
                {/* Micro popup badge */}
                <div className="absolute -bottom-4 -left-4 bg-base-100 border border-base-300 p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
                  <span className="p-1.5 rounded-full bg-success text-success-content">
                    <HeartIcon className="size-4 fill-current" />
                  </span>
                  <span className="text-xs font-semibold">2 Active Friends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-base-200 border-y border-base-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Everything you need in one place</h2>
            <p className="opacity-75 text-base sm:text-lg">
              Explore powerful, modern communication tools built to keep you connected wherever you go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md hover:border-primary/30 transition-all duration-300">
              <div className="card-body p-6 space-y-3">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <MessageSquareIcon className="size-6" />
                </div>
                <h3 className="card-title text-xl font-bold">Instant Chat</h3>
                <p className="text-sm opacity-75">
                  Send real-time text messages with typing indicators and smooth read statuses, powered by a robust messaging core.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md hover:border-secondary/30 transition-all duration-300">
              <div className="card-body p-6 space-y-3">
                <div className="size-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                  <VideoIcon className="size-6" />
                </div>
                <h3 className="card-title text-xl font-bold">HD Video & Calls</h3>
                <p className="text-sm opacity-75">
                  Host crystal-clear video and audio calls with friends directly in your browser. No downloads or plugins required.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="card-body p-6 space-y-3">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-2">
                  <UsersIcon className="size-6" />
                </div>
                <h3 className="card-title text-xl font-bold">Meet New People</h3>
                <p className="text-sm opacity-75">
                  Find new connections and send friend requests to interesting people across the globe with our recommendation feed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 sm:py-20 text-center relative overflow-hidden bg-linear-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 max-w-2xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to jump in?</h2>
          <p className="opacity-80">
            Create your account today and experience a faster, more personal social platform.
          </p>
          <div className="pt-4">
            <Link
              to="/signup"
              className="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl normal-case font-bold"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer footer-center p-8 bg-base-300 text-base-content border-t border-base-300">
        <aside className="space-y-2">
          <div className="flex items-center justify-center gap-2.5">
            <div className="size-7 rounded-lg bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-xs">
              <SparklesIcon className="size-3.5 text-white animate-pulse" />
            </div>
            <span className="font-extrabold font-display tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent">
              Connectly
            </span>
          </div>
          <p className="text-xs opacity-75">
            &copy; {new Date().getFullYear()} Connectly. All rights reserved. Made with &hearts; for the web.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default LandingPage;
