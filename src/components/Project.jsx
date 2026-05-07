import aoi from '/aoi.jpg'

const ProjectEntry = ({ title, techStack, link, image, extra}) => (
    <div className="w-64 h-84 bg-black rounded-md hover:scale-103 transition-transform duration-500">
        <img src={image} className="w-64 h-64 rounded-md mx-auto block"></img>
        <h2 className="!text-white">{title}</h2>
        <ul className="flex flex-wrap justify-center mt-2 gap-1">
            {techStack.map(pill => <li className="inline-flex text-xs text-white bg-blue-500 rounded-sm px-2">{pill}</li>)}
        </ul>
        <p className="text-white text-xs">{extra}</p>
    </div>
);

function Project() {
    return(
        <div data-aos="fade-up" data-aos-duration="2000">
            <h1>Projects</h1>
            <div className="grid grid-cols-3 py-8 px-48 justify-items-center">
                <ProjectEntry
                    title="Agents of Influence"
                    image={aoi}
                    description="some words to fill out the website so i can come back and fix it later"
                    techStack={["Unity", "C#", "Firebase"]}
                    extra="* in collaboration with Alterea Inc"
                    >
                </ProjectEntry>
                <ProjectEntry
                    title="Agents of Influence"
                    image={aoi}
                    description="some words to fill out the website so i can come back and fix it later"
                    techStack={["Unity", "C#", "Firebase"]}
                    extra="* in collaboration with Alterea Inc"
                    >
                </ProjectEntry>
                <ProjectEntry
                    title="Agents of Influence"
                    image={aoi}
                    description="some words to fill out the website so i can come back and fix it later"
                    techStack={["Unity", "C#", "Firebase"]}
                    extra="* in collaboration with Alterea Inc"
                    >
                </ProjectEntry>
            </div>
        </div>
    );
}

export default Project;