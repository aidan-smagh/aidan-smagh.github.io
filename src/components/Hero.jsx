import profile_picture from '/profile_picture.jpeg'

function Hero() {
    return (
        <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-16 md:py-20">
            <div className="max-w-xl text-left">
                <h1>Hello!</h1>
                <p className="text-lg leading-relaxed text-ink/80">
                    My name is <span className="font-semibold text-ink">Aidan Smagh</span>.
                    I am a current master's student at the University of Pittsburgh with a background in software engineering
                    and game development. I'm currently interning as a game development intern
                    and building out of my personal projects on the side.
                </p>
            </div>
            <img
                src={profile_picture}
                alt="Aidan Smagh"
                className="aspect-[4/5] w-full max-w-xs justify-self-center rounded-2xl object-cover object-[center_18%] shadow-sm ring-1 ring-line md:max-w-none"
            />
        </section>
    );
}

export default Hero;
