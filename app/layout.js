import './globals.css';

import localFont from 'next/font/local';

const myFont = localFont({
	src: './ClashDisplay-Variable.ttf',
	display: 'swap',
});

export const metadata = {
	title: 'Lunamar',
	description: 'Supertalented Dj',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}
