import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	const { FullName, Subject, Country, Message } = await req.json();

	try {
		const data = await resend.emails.send({
			from: 'contact@djlunamar.com',
			to: 'Lunamardj@gmail.com',
			subject: `${Subject}`,
			react: EmailTemplate({
				fullname: FullName,
				country: Country,
				content: Message,
			}),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}
