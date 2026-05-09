export const underlineClass= [
    "relative cursor-pointer",
    "after:absolute after:bottom-[-2px] after:left-0",
    "after:h-0.5 after:w-full after:bg-current",
    "after:scale-y-0 after:origin-bottom",
    "after:transition-transform after:duration-300",
    "hover:after:scale-y-100"
].join(" ");

const NavLink = ({ href, children }) => (
    <a className={underlineClass} href={href} target="_blank" rel="noreferrer">
        <span className="font-bold">{children}</span>
    </a>
);

function Header() {
    return (
        <div className="flex justify-between px-4 py-4 z-10 fixed bg-slate-100 w-screen">
            <p className="text-left font-bold">Aidan Smagh</p>
            <div className="flex gap-4">
            <NavLink href="https://github.com/aidan-smagh">Github</NavLink>
            <NavLink href="https://www.linkedin.com/in/aidan-smagh-b189242a7/">LinkedIn</NavLink>
            <NavLink href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=aidansmagh@gmail.com">Email</NavLink>
            <NavLink href="Aidan_Smagh_Resume.pdf">Resumé</NavLink>
            </div>
        </div>
    );
}

export default Header;