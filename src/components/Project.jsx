import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/filter/filterSlice'
import projects from '../data/projects.js'

const filters = [
    { id: "all", label: "All" },
    { id: "swe", label: "Software Engineering" },
    { id: "gameDev", label: "Game Development" },
];

const ProjectEntry = ({ title, techStack, link, image, extra = " ", event }) => {
    const card = (
        <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card text-left shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
            <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="text-lg">{title}</h3>
                <ul className="flex list-none flex-wrap gap-1.5 p-0">
                    {techStack.map(pill => (
                        <li key={pill} className="rounded-full bg-paper px-2 py-0.5 text-xs text-muted ring-1 ring-line">{pill}</li>
                    ))}
                </ul>
                {extra.trim() ? <p className="mt-auto pt-2 text-xs text-muted">{extra}</p> : null}
            </div>
        </article>
    );

    if (!link) {
        return <div className="h-full">{card}</div>;
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full no-underline" data-umami-event={event} data-umami-event-location="projects">
            {card}
        </a>
    );
};

function Project() {
    const filter = useSelector((state) => state.filter.value);
    const dispatch = useDispatch();
    const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

    return (
        <section id="projects" data-aos="fade-up" data-aos-duration="2000" className="scroll-mt-20 mx-auto max-w-5xl px-6 py-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-left">Projects</h2>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                    {filters.map(({ id, label }) => {
                        const selected = filter === id;
                        return (
                            <button
                                key={id}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => dispatch(setFilter(id))}
                                className={
                                    selected
                                        ? "rounded-full border border-ink bg-ink px-3 py-1 text-sm text-paper"
                                        : "rounded-full border border-line bg-card px-3 py-1 text-sm text-muted transition-colors hover:border-ink/30 hover:text-ink"
                                }
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>
    );
}

export default Project;
