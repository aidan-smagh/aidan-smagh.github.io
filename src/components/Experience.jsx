import eServices from '/eServices.jpg'
import alterea from '/alterea.jpg'

const ExperienceEntry = ({ logo, companyTitle, jobTitle, date, descriptionBullets, logoClassName="w-72" }) => (
    <div className="grid grid-cols-2 gap-4 px-64">
        <img src={logo} className={logoClassName} />
        <div className="w-80">
            <h2>{companyTitle}</h2>
            <h3>{jobTitle}</h3>
            <p>{date}</p>
            <ul>
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
            <ExperienceEntry
                logo={alterea}
                companyTitle="Alterea Inc"
                jobTitle="Game Development Intern"
                date="Jan 2026-May 2026"
                descriptionBullets={["something"]}
                logoClassName="w-32">
            </ExperienceEntry>
        </div>

    );
}

export default Experience;