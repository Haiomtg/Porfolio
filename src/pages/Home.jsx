// import React from 'react';

const Home = () => {
    return (
        <section id="about" className="p-8 flex flex-col items-center bg-gray-50 rounded-lg shadow-md h-screen">
            <img src="/path/to/your/avatar.jpg" alt="Avatar" className="rounded-full w-32 h-32 mb-4 border-4 border-blue-500" />
            <h1 className="text-4xl font-bold mb-2 text-gray-800">Your Full Name</h1>
            <h3 className="text-lg text-gray-600 mb-2">Your Address</h3>
            <p className="text-lg text-gray-600 mb-2">Contact: (123) 456-7890</p>
            <p className="text-lg text-gray-600 mb-2">Email: (123) 456-7890</p>
            <p className="text-lg text-gray-600 mb-4">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">yourprofile</a></p>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <p className="text-gray-700 mb-4">Details about your education, such as degrees obtained, institutions attended, and years of graduation.</p>

                <h2 className="text-2xl font-semibold mb-2">Certificates</h2>
                <p className="text-gray-700 mb-4">Details about any relevant certificates you have earned, including the issuing organization and date.</p>

                <h2 className="text-2xl font-semibold mb-2">Programming Skills</h2>
                <p className="text-gray-700">List your programming skills here, such as languages, frameworks, and tools you are proficient in.</p>
            </div>
        </section>
    );
};

export default Home;