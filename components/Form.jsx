'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Resend } from 'resend';

function Form() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const validateMessage = (value) => {
		const words = value.trim().split(/\s+/);
		return words.length > 10;
	};

	const SendEmail = async (data) => {
		try {
			const response = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const responseData = await response.json();

			console.log(JSON.stringify(responseData));

			if (responseData.id) {
				alert('Email Sent Successfully!');
				reset();
			}
		} catch (error) {
			alert('Failed to send email:', error);
		}
	};

	return (
		<div className="bg-gradient-to-t from-[#0b092d] to-black  w-full px-10 md:px-20 py-40">
			<h1 className="clashSemiBold text-white text-[3rem] font-semibold">
				GET ME TO PLAY AT YOUR EVENT
			</h1>
			<form
				onSubmit={handleSubmit(SendEmail)}
				className="flex flex-col w-full gap-y-6 mt-8 clash-Medium"
			>
				<div className="w-full flex gap-x-6">
					<div className="w-[50%] flex flex-col items-center  gap-[1px]">
						<input
							type="text"
							{...register('FullName', { required: 'Full Name is required' })}
							className="w-full p-4 rounded-md h-20"
							placeholder="Full Name"
						/>
						{errors.FullName?.type === 'required' && (
							<span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
								First name is required
							</span>
						)}
					</div>
					<div className="w-[50%] flex flex-col items-center gap-[1px] ">
						<input
							type="text"
							{...register('Country', { required: 'Country is required' })}
							className="w-full p-4 rounded-md h-20"
							placeholder="Country"
						/>
						{errors.Country?.type === 'required' && (
							<span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
								Country is required
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col items-center gap-[1px] ">
					<input
						type="text"
						{...register('Subject', { required: 'Subject is required' })}
						className="w-full p-4 rounded-md h-20"
						placeholder="Subject"
					/>
					{errors.Subject?.type === 'required' && (
						<span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
							Subject is required
						</span>
					)}
				</div>
				<div className="flex flex-col items-center gap-[1px]">
					<textarea
						rows={8}
						{...register('Message', {
							required: 'Message is required',
							validate: validateMessage,
						})}
						placeholder="Write your message here"
						className="w-full p-4 rounded-md "
					/>
					{errors.Message && (
						<span className="inline w-auto px-4 py-2 max-w-[50%]  bg-[#fce8e8] text-[#b92222]">
							{errors.Message?.type === 'required'
								? 'Message is required'
								: errors.Message?.type === 'validate'
								? 'Message should have more than 10 words'
								: ''}
						</span>
					)}
				</div>
				<button
					type="submit"
					className="p-4 rounded-sm bg-[#402e89] flex w-[200px]  justify-center items-center text-white clashSemiBold"
				>
					SEND MESSAGE
				</button>
			</form>
		</div>
	);
}

export default Form;
