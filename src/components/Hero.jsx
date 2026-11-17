import profile_picture from '/profile_picture.jpeg'

function Hero() {
    return (
        <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-16 md:py-20">
            <div className="max-w-xl text-left">
            <h1>I build games and the real-time systems behind them.</h1>
            <p className="text-lg leading-relaxed text-ink/80">
                I'm <span className="font-semibold text-ink">Aidan Smagh</span>, a computer science master's student
                at the University of Pittsburgh, graduating in May 2027. I'm a game development intern at Alterea,
                working on Agents of Influence. I'm also building Riposte, a platform fighter, and researching
                rollback netcode for my master's project. I'm looking for full-time roles in game programming
                and software engineering.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
                When I'm not coding, I'm usually in a game jam or getting better at 3D art in Blender.
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
