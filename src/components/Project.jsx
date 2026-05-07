import aoi from '/aoi.jpeg'

const ProjectEntry = ({ title, techStack, link, image, extra}) => (
    <div className="w-64 h-84 bg-black rounded-md hover:scale-103 transition-transform duration-500">
        <img src={image} className="w-64 h-64 rounded-md"></img>
        <h2 className="!text-white">{title}</h2>
        <ul className="flex flex-wrap justify-center mt-2 gap-1">
            {techStack.map(pill => <li className="inline-flex text-xs bg-blue-300 rounded-sm px-2">{pill}</li>)}
        </ul>
        <p className="text-white text-xs">{extra}</p>
    </div>
);

function Project() {
    return(
        <div data-aos="fade-up" data-aos-duration="2000" className="pb-32">
            <h1>Projects</h1>
            <div className="grid grid-cols-2 gap-4 px-64 py-8">
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