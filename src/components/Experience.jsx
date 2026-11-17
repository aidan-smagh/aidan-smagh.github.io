import eServices from '/eServices.png'
import alterea from '/alterea.png'

const ExperienceEntry = ({ logo, companyTitle, jobTitle, date, descriptionBullets }) => (
    <article className="grid items-start gap-5 py-8 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8">
        <div className="relative h-16 w-36 md:h-auto md:w-auto md:self-stretch">
            <img src={logo} alt="" className="absolute inset-0 h-full w-full object-contain object-left md:object-center" />
        </div>
        <div className="text-left">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl">{companyTitle}</h3>
                <p className="text-sm text-muted">{date}</p>
            </div>
            <p className="mt-1 text-ink">{jobTitle}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
                {descriptionBullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
        </div>
    </article>
);

function Experience() {
    return (
        <section id="experience" data-aos="fade-up" data-aos-duration="2000" className="scroll-mt-20 mx-auto max-w-5xl px-6 pb-8">
            <h2 className="text-left">Experience</h2>
            <div className="mt-4 divide-y divide-line border-t border-line">
                <ExperienceEntry
                    logo={eServices}
                    companyTitle="eServices Payment Technology"
                    jobTitle="Software Engineer-Summer Intern"
                    date="May 2026-August 2026"
                    descriptionBullets={["Built and hardened full-stack features for eServices' membership platform (React, Redux, Node.js, SQL Server), spanning recycle bin/soft-delete systems, dynamic custom fields, and a real-time notification template engine."]}
                />
                <ExperienceEntry
                    logo={alterea}
                    companyTitle="Alterea Inc"
                    jobTitle="Game Development Intern"
                    date="Jan 2026-Present"
                    descriptionBullets={["Working on Agents of Influence, building gameplay systems and tools in Unity using C# and Firebase. Working across UI, audio integration, and QA to ship a polished player experience."]}
                />
            </div>
        </section>
    );
}

export default Experience;
