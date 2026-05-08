import aoi from '/aoi.jpg'
import pairpad from '/pairpad.jpg'
import wip from '/wip.jpg'
import imageeditor from '/imageeditor.jpg'

const ProjectEntry = ({ title, techStack, link, image, extra = " " }) => (
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
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <h1>Projects</h1>
            <div className="grid grid-cols-3 py-8 gap-y-6 px-48 justify-items-center">
                <ProjectEntry
                    title="Agents of Influence"
                    image={aoi}
                    link="https://www.agentsofinfluencegame.com/" s
                    description="some words to fill out the website so i can come back and fix it later"
                    techStack={["Unity", "C#", "Firebase"]}
                    extra="* in collaboration with Alterea Inc"
                >
                </ProjectEntry>
                <ProjectEntry
                    title="Pairpad (WIP)"
                    image={pairpad}
                    link="https://github.com/SC0R9I0N/PairPad"
                    description="A collaborative code editor"
                    techStack={["Python", "JavaScript", "React", "SpacetimeDB"]}
                >
                </ProjectEntry>
                <ProjectEntry
                    title="Roguelike (WIP)"
                    image={wip}
                    link="https://github.com/aidan-smagh/SampleRoguelike"
                    description="A work in progress COD Zombies inspired roguelike"
                    techStack={["Unity", "C#"]}
                >
                </ProjectEntry>
                <ProjectEntry
                    title="Serverless Image Editor"
                    image={imageeditor}
                    link="https://dw6p0urxtjaom.cloudfront.net"
                    description="A serverless image editor made using AWS services"
                    techStack={["React", "S3", "DynamoDB", "Cloudfront", "Cognito", "Lambda", "Step Functions", "API Gateway"]}
                >
                </ProjectEntry>
            </div>
        </div>
    );
}

export default Project;