"use client";

import { MESSAGE_CHAR_LIMIT } from "@/lib/constants";
import { contactFormSchema } from "@/lib/formValidationSchemas";
import sendContactMail from "@/lib/sendContactMail";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../Button";
import Input from "../FormComponents/Input";
import TextArea from "../FormComponents/TextArea";

function ContactForm() {
  // hooks
  const [msgCharCount, setMsgCharCount] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  // motion animation options
  const motionOptions = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const onSubmit = async (data) => {
    const resData = await sendContactMail(data);
    if (resData?.error) {
      {
        console.error("Error sending contact mail:", resData.error);
        toast.error("Failed to send message. Please try again.");
        return;
      }
    }
    reset();
    toast.success("Message sent successfully!");
  };

  return (
    <motion.form
      {...motionOptions}
      onSubmit={handleSubmit(onSubmit)}
      className="my-11 flex w-full max-w-[540px] flex-col items-center lg:pl-5"
    >
      <Input
        register={register}
        label="Name"
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        error={errors?.name?.message}
      />

      <Input
        register={register}
        label="Email"
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
        error={errors?.email?.message}
      />

      <TextArea
        label="Message"
        required
        register={register}
        onChange={(e) => setMsgCharCount(e.target.value.length)}
        maxLength={MESSAGE_CHAR_LIMIT}
        name="message"
        id="message"
        autoComplete="off"
        rows="8"
        cols="30"
        error={errors?.message?.message}
        textCharCount={msgCharCount}
      />

      <Button
        type="submit"
        size="lg"
        color={isSubmitting ? "secondary" : "primary"}
        isSubmitting={isSubmitting}
      >
        Send Message
      </Button>
    </motion.form>
  );
}

export default ContactForm;
