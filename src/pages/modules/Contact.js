import { Form, Button } from 'react-bootstrap';
const ContactForm = () => {
  return (
    <Form
      className='contact-form mb-5'
      method='POST'
      data-netlify='true'
      name='contact'
    >
      <input type='hidden' name='form-name' value='contact' />
      <Form.Group className='mb-3' controlId='contactName'>
        <Form.Control type='text' placeholder='Your Name' name='name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='contactEmail'>
        <Form.Control type='email' placeholder='Enter email' name='email' />
        <Form.Text className='text-muted'>
          Your email, and information will be kept confidential.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='contactMessage'>
        <Form.Control
          as='textarea'
          placeholder='Your Message...'
          name='message'
          rows={3}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
