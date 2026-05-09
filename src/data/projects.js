import aoi from '/aoi.jpg'
import pairpad from '/pairpad.jpg'
import wip from '/wip.jpg'
import imageeditor from '/imageeditor.jpg'

const projects = [
    {
        title: "Agents of Influence",
        image: aoi,
        link: "https://www.agentsofinfluencegame.com/",
        description: "some words to fill out the website so i can come back and fix it later",
        techStack: ["Unity", "C#", "Firebase"],
        extra: "* in collaboration with Alterea Inc",
        category: "gameDev"
    },
    {
        title: "Pairpad (WIP)",
        image: pairpad,
        link: "https://github.com/SC0R9I0N/PairPad",
        description: "A collaborative code editor",
        techStack: ["Python", "JavaScript", "React", "SpacetimeDB"],
        category: "swe"
    },
    {
        title: "Roguelike (WIP)",
        image: wip,
        link: "https://github.com/aidan-smagh/SampleRoguelike",
        description: "A work in progress COD Zombies inspired roguelike",
        techStack: ["Unity", "C#"],
        category: "gameDev"
    },
    {
        title: "Serverless Image Editor",
        image: imageeditor,
        link: "https://dw6p0urxtjaom.cloudfront.net",
        description: "A serverless image editor made using AWS services",
        techStack: ["React", "S3", "DynamoDB", "Cloudfront", "Cognito", "Lambda", "Step Functions", "API Gateway"],
        category: "swe"
    }
]

export default projects;