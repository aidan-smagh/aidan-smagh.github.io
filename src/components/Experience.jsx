import eServices from '/eServices.jpg'
import alterea from '/alterea.jpg'

const ExperienceEntry = ({ logo, companyTitle, jobTitle, date, descriptionBullets, logoClassName="w-72" }) => (
    <div className="grid grid-cols-2 gap-4 px-64 py-8">
        <img src={logo} className={logoClassName} />
        <div>
            <h2 className="font-bold">{companyTitle}</h2>
            <h3 className="font-bold">{jobTitle}</h3>
            <p>{date}</p>
            <ul className="left-disc list-outside ml-4">
                {descriptionBullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    </div>
);

function Experience() {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="pb-32">
            <h1>Experience</h1>
            <ExperienceEntry 
                logo={eServices}
                companyTitle="eServices Payment Technology"
                jobTitle="Software Engineer-Summer Intern"
                date="May 2026-August 2026"
                descriptionBullets={["TBD"]}>
            </ExperienceEntry>
            <hr className="my-12 mx-auto h-0.5 border-t-0 bg-slate-200 max-w-1/3" />
            <ExperienceEntry
                logo={alterea}
                companyTitle="Alterea Inc"
                jobTitle="Game Development Intern"
                date="Jan 2026-May 2026"
                descriptionBullets={["Working on Agents of Influence, building gameplay systems and tools in Unity using C# and Firebase. Working across UI, audio integration, and QA to ship a polished player experience."]}
                logoClassName="w-32">
            </ExperienceEntry>
        </div>

    );
}

export default Experience;