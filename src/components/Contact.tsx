import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then(() => {
        alert("Message sent successfully!");
        reset();
      }, () => {
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name')} placeholder="Your Name" className="w-full p-3 rounded border" required />
          <input {...register('email')} type="email" placeholder="Your Email" className="w-full p-3 rounded border" required />
          <textarea {...register('message')} placeholder="Your Message" rows={5} className="w-full p-3 rounded border" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
