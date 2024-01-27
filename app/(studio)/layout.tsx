import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sanity Dashboard | The Swiss Cheese',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
