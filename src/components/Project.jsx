import { useSelector } from 'react-redux'
import projects from '../data/projects.js'

const ProjectEntry = ({ title, techStack, link, image, extra = " ", category }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        <div className="w-64 h-92 pb-4 bg-black rounded-md hover:scale-103 transition-transform duration-500">
            <img src={image} className="w-64 h-64 rounded-md mx-auto block"></img>
            <h2 className="!text-white">{title}</h2>
            <ul className="flex flex-wrap justify-center mt-2 gap-1">
                {techStack.map(pill => <li className="inline-flex text-xs text-white bg-blue-500 rounded-sm px-2">{pill}</li>)}
            </ul>
            <p className="text-white text-xs py-8">{extra}</p>
        </div>
    </a>
);


function Project() {
    const filter = useSelector((state) => state.filter.value);
    const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter)
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <h1>Projects</h1>
            <div className="grid grid-cols-3 py-8 gap-y-6 px-48 justify-items-center">
                {filteredProjects.map(project => (
                    <ProjectEntry
                        key={project.title}
                        title={project.title}
                        image={project.image}
                        techStack={project.techStack}
                        link={project.link}
                        extra={project.extra}
                    />
                ))}
            </div>
        </div>
    );
}

export default Project;