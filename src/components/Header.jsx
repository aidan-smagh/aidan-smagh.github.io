const navClass =
    "text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const NavLink = ({ href, children, event }) => (
    <a
        className={navClass}
        href={href}
        target="_blank"
        rel="noreferrer"
        data-umami-event={event}
        data-umami-event-location="header"
    >
        {children}
    </a>
);

function Header() {
    return (
        <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
                <a href="#top" className="font-serif text-lg text-ink">Aidan Smagh</a>
                <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a className={navClass} href="#experience">Experience</a>
                    <a className={navClass} href="#projects">Projects</a>
                    <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
                    <NavLink href="https://github.com/aidan-smagh" event="">Github</NavLink>
                    <NavLink href="https://www.linkedin.com/in/aidan-smagh-b189242a7/">LinkedIn</NavLink>
                    <NavLink href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=aidansmagh@gmail.com">Email</NavLink>
                    <NavLink href="Aidan_Smagh_Resume.pdf">Resumé</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
