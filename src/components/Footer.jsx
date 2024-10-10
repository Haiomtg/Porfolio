const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                Follow me on 
                <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-400 hover:underline"> LinkedIn</a> | 
                <a href="https://github.com/yourprofile" className="text-blue-400 hover:underline"> GitHub</a>
            </p>
        </footer>
    );
};

export default Footer;