

const Contact = () => {
    return (
        <section id="contact" className="p-8">
            <h2 className="text-2xl">Contact Me</h2>
            <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Your Name" className="border p-2" required />
                <input type="email" placeholder="Your Email" className="border p-2" required />
                <textarea placeholder="Your Message" className="border p-2" required></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;