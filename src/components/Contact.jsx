import {Form, Input, Button} from "@heroui/react";
import { useForm } from '@formspree/react';


const Contact = (() => {
    const [state, handleSubmit] = useForm(process.env.FORMSPREE); // TODO: hide this in time

    if (state.succeeded) {
      return <h2 className="text-black text-3xl">Thanks for your email! You can expect a response shortly.</h2>;
    }

    return (
        <div onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center bg-[#F5F0E1]">
            <h1 className="text-6xl mb-7">Contact Me</h1>
            <Form className="w-5/6 h-4/6">
                <Input className="p-3 mt-3 border border-black" isRequired errorMessage="Please enter a valid email"
                labelPlacement="outside" name="email" placeholder="Enter your email" type="email"/>
                
                <Input className="p-3 mt-3 border border-black" name="subject" placeholder="Subject" type="text"/>
                
                <Input className="p-3 mt-3 flex-1 bg-transparent border border-black" isRequired errorMessage="Please enter a valid message"
                labelPlacement="outside" name="message" placeholder="Message" type="text"/>

                <Button className="ml-auto w-1/3 mt-3 justify-end border border-black" type="submit" variant="bordered">
                    Submit
                </Button>
            </Form>
        </div>
    )
})

export default Contact;