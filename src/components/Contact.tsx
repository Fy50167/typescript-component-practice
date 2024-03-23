import React from 'react';

const Contact = () => {
    return (
        <form
            // Ignore the onSubmit prop, it's used by GFE to
            // intercept the form submit event to check your solution.

            action='https://www.greatfrontend.com/api/questions/contact-form'
            method='post'
        >
            <div>
                <label htmlFor='name-input'>Name</label>
                <input id='name-input' name='name' type='text' />
            </div>
            <div>
                <label htmlFor='email-input'>Email</label>
                <input id='email-input' name='email' type='email' />
            </div>
            <div>
                <label htmlFor='message-input'>Message</label>
                <textarea id='message-input' name='message'></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default Contact;
