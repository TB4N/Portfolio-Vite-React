import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mayrkvvb");
    if (state.succeeded) {
        return <h1 className='message__contact'>Thank you for Message me</h1>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder="Name" className='input' required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input type="email" name="email" placeholder="Email" className='input' required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea name="message" rows="10" cols="30" placeholder="Message for me" className='textarea' required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className='btn_submit' disabled={state.submitting}>
            <span>Send</span>
            </button>
        </form>
    )
}

export default ContactForm