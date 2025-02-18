"use client"
import React, { useState } from 'react';
import { ChevronDown, LoaderCircle, MailCheck, Send } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    interest: string;
    message: string;
    policy: string;
    acceptPolicy: boolean;
}

const ContactForm = () => {

    const [isInProcess, setIsInProcess] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);


    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        interest: '',
        message: '',
        policy: '',
        acceptPolicy: false
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.interest) {
            newErrors.interest = 'Please select an interest';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        // if (!formData.acceptPolicy) {
        //     newErrors.policy = 'You must accept the privacy policy';
        // }

        setErrors(newErrors);


        setTimeout(() => {
            setErrors({})
        }, 20000);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSent(false)
        if (validateForm()) {
            try {
                setIsInProcess(true);
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setFormData({
                        name: '',
                        email: '',
                        interest: '',
                        message: '',
                        policy: '',
                        acceptPolicy: false
                    });
                    setIsInProcess(false);
                    setIsSent(true);
                } else {
                    alert('Failed to send message. Please try again.');
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                alert('An error occurred. Please try again later.');
                console.log(error);

            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 min-w-full bg-background text-whtie text-button  placeholder-secondary ">
            <input
                title='Enter you name'
                type="text"
                placeholder="Your name here"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-b border-secondary pb-2 pt-1 px-0  focus:outline-none focus:border-opacity-100 border-opacity-50 transition-colors"
            />
            {errors.name && <span className="text-red-500 text-sm ">{errors.name}</span>}

            <input
                title='Enter your email address'
                type="email"
                placeholder="Your email here"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-b border-secondary pb-2 pt-1 px-0   focus:outline-none focus:border-opacity-100 border-opacity-50 transition-colors"
            />
            {errors.email && <span className="text-red-500 text-sm ">{errors.email}</span>}

            <div className="relative">
                <select
                    title="Select a service or collaboration option"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-background border-b border-secondary  pb-2 pt-1 px-0  focus:outline-none   focus:border-opacity-100 border-opacity-50 transition-colors appearance-none"
                    aria-label="Select a service or collaboration option"
                >
                    <option className='bg-[#111111]' value="" disabled>Select a service or collaboration</option>
                    <option className='bg-[#111111]' value="development">Software & Web Development</option>
                    <option className='bg-[#111111]' value="sketching">Hand-drawn Sketching & Artwork</option>
                    <option className='bg-[#111111]' value="collaboration">Looking to collaborate on a project</option>
                </select>
                <ChevronDown className='absolute right-0 top-[10px]' />
            </div>
            {errors.interest && <span className="text-red-500 text-sm ">{errors.interest}</span>}

            <textarea
                title='Describe you intrest'
                placeholder="Resume it in a few words"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-transparent border-b border-secondary pb-2 pt-1 px-0   focus:outline-none border-opacity-50  focus:border-opacity-100 transition-colors resize-none min-h-[100px]"
            />
            {errors.message && <span className="text-red-500 text-sm ">{errors.message}</span>}

            {/* <div className="flex items-center gap-2">
                <input
                    title='click to accept policy'
                    type="checkbox"
                    checked={formData.acceptPolicy}
                    onChange={(e) => setFormData({ ...formData, acceptPolicy: e.target.checked })}
                    className="w-4 h-4 border-secondary rounded"
                />
                <label className="text-sm text-gray-400">
                    By sending my details, I have read and accept the Privacy policy.
                </label>
            </div> */}
            {errors.acceptPolicy && <span className="text-red-500 text-sm ">{errors.policy}</span>}

            <button
                disabled={isInProcess}
                type='submit'
                title='Click to send a email to me'
                className='self-end md:self-start 0 w-60 lg:w-72 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group'>
                Contact
                {!isInProcess ?
                    isSent ? <MailCheck className='text-button  scale-75' color='lightgreen' /> : <Send className='text-button group-hover:rotate-45 transition-all scale-75' /> :
                    <LoaderCircle className='animate-spin' />
                }
            </button>
        </form>
    );
};

export default ContactForm;