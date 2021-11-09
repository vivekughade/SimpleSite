import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="Ccontainer">
            <h1 className="b"><b>Contact</b></h1>
            <p>Aenean a consectetur mi, sit amet consequat velit. Mauris vitae nunc viverra, mattis arcu quis, vestibulum eros.</p>
                <form>
                    <input type="text" placeholder="Your Name...." />
                    <input type="email" placeholder="Your Email id..."/><br/>
                    <input type="text" className="s" placeholder="Your Subject..."/><br/>
                    <textarea cols="95" rows="7" placeholder="Your text..."></textarea>
                    <button className="btn btn-primary w">Send Message</button>
                </form>
        </div>
        </>
    );
};

export default Contact;