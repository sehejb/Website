import {Form, Input, Button} from "@heroui/react";

const Contact = (() => {
    return (
        <Form>
            <Input isRequired errorMessage="Please enter your email." 
            label="Email" labelPlacement="outside" name="email" 
            placeholder="Enter your email" type="email"></Input>
        </Form>
    )
})

export default Contact;