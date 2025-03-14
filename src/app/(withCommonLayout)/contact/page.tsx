"use client";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import TTForm from "@/src/components/Form/TTForm";
import TTInput from "@/src/components/Form/TTInput";
import TTTextarea from "@/src/components/Form/TTTextArea";

const Contact = () => {
  const handleMessage: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
  };

  return (
    <div>
      <div className="relative my-5">
        <p className="first-letter:text-[#ff6a00]  text-xl font-semibold">
          Get in Touch
        </p>
        <div className=" absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] " />
      </div>
      <div>
        <div className="h-[300px] md:h-[300px] border-2 rounded-md border-[#F6B846] lg:h-[300px]">
          <iframe
            className="rounded-lg"
            height="100%"
            loading="lazy"
            src="https://maps.google.com/maps?q=23.456678, 91.165065&z=15&output=embed"
            style={{ border: 0 }}
            title="Office Location"
            width="100%"
          />
        </div>
      </div>
      <div>
        <div className="relative my-5">
          <p className="first-letter:text-[#ff6a00]  text-xl font-semibold">
            Contact Form
          </p>
          <div className=" absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] " />
        </div>
        <div>
          <TTForm onSubmit={handleMessage}>
            <TTInput label="Your Name" name="name" />
            <TTInput label="Your Email" name="email" />
            <TTTextarea label="Message" name="message" />
            <Button
              className="w-full bg-[#F6B846] font-semibold "
              type="submit"
            >
              Submit
            </Button>
          </TTForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
