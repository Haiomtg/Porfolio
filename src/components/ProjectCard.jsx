import PropTypes from 'prop-types'; // Add this import

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl">{title}</h3>
            <p>{description}</p>
            <a href={link} className="text-blue-500">View Project</a>
        </div>
    );
};

// Add PropTypes validation
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
};

export default ProjectCard;