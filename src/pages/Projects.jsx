

const Projects = () => {
    return (
        <section id="projects" className="p-8">
            <h2 className="text-2xl">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example Project Card */}
                <div className="border p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl">Project Title</h3>
                    <p>A brief description of the project.</p>
                    <a href="#" className="text-blue-500">View Project</a>
                </div>
                {/* Add more Project Cards as needed */}
            </div>
        </section>
    );
};

export default Projects;