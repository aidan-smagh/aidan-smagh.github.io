import eServices from '/eServices.jpg'


const ExperienceEntry = ({ logo, companyTitle, jobTitle, descriptionBullets }) => (
    <div className="flex justify-between px-56 py-8">
        <img src={logo} className="w-64" />
        <div>
            <h2>{companyTitle}</h2>
            <h3>{jobTitle}</h3>
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
            <ExperienceEntry logo={eServices}
                companyTitle="eServices Payment Technology"
                jobTitle="Software Engineer-Summer Intern"
                descriptionBullets={["TBD"]}>
            </ExperienceEntry>
        </div>

    );
}

export default Experience;