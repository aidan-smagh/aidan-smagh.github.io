import profile_picture from '/profile_picture.jpeg'

function Hero() {
    return (
        <div className="flex justify-around min-h-screen">
            <div className="mt-32 me-8 font-noto basis-128">
                <h1>Hello!</h1>
                <h2>My name is 
                    <span className="font-bold"> Aidan Smagh</span>
                    . I am a current master's student at the
                    University of Pittsburgh with a background in software engineering
                    and game development. I'm currently interning as a game development intern
                    and building out of my personal projects on the side.
                </h2>
            </div>
            <img src={profile_picture} className="w-64 h-64 rounded-full object-cover mt-52" />
        </div>
    );
}

export default Hero;