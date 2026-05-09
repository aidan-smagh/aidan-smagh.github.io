import profile_picture from '/profile_picture.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/filter/filterSlice'
import { underlineClass } from './Header.jsx'

export const activeClass= [
    "relative cursor-pointer",
    "after:absolute after:bottom-[-2px] after:left-0",
    "after:h-0.5 after:w-full after:bg-current",
    "after:scale-y-0 after:origin-bottom",
    "after:transition-transform after:duration-300",
    "after:scale-y-100"
].join(" ");

export function Hero() {
    const filter = useSelector((state) => state.filter.value);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen">
            <div className="flex justify-around">
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
            <div>
                <button onClick={() => dispatch(setFilter("all"))} className={filter === 'all' ? activeClass : underlineClass}>All</button>
            </div>
            <div className="flex justify-evenly py-8">
                <button onClick={() => dispatch(setFilter("swe"))} className={filter === 'swe' ? activeClass : underlineClass}>Software Engineering</button>
                <button onClick={() => dispatch(setFilter("gameDev"))} className={filter === 'gameDev' ? activeClass : underlineClass}>Game Development</button>
            </div>
        </div>
    );
}

export default Hero;