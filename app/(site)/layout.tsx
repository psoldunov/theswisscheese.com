import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import psLogo from '../assets/ps-logo.svg';

const ibm_plex_sans = IBM_Plex_Sans({
	display: 'swap',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-ibm-plex-sans',
});

const ibm_plex_mono = IBM_Plex_Mono({
	display: 'swap',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-ibm-plex-mono',
});

const ibm_plex_serif = IBM_Plex_Serif({
	display: 'swap',
	subsets: ['latin', 'cyrillic'],
	weight: '400',
	variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
	title: 'Welcome to my GitHub corner | Philipp Soldunov',
	description:
		'This website was build as a requirement for my Founders and Coders application but I may evolve it into full-fledged portfolio site in the future.',
};

function getYearNow() {
	const date = new Date();
	return date.getFullYear();
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${ibm_plex_mono.variable} ${ibm_plex_sans.variable} ${ibm_plex_serif.variable}`}>
				<header className='navbar'>
					<div className='main-container navbar-container'>
						<div className='navbar-inner'>
							<Link className='logo-link' href='/'>
								<Image src={psLogo} width={48} alt='GitHub' />
							</Link>
							<nav className='nav-menu'>
								<Link className='nav-link' href='#intro'>
									Intro
								</Link>
								<Link className='nav-link' href='#why'>
									Why am I doing this?
								</Link>
								<Link className='nav-link' href='#bonus'>
									Bonus
								</Link>
								<Link className='nav-link' href='#contact'>
									Contact
								</Link>
							</nav>
						</div>
					</div>
				</header>
				{children}
				<footer className='footer'>
					<div className='main-container'>
						<span>{getYearNow()} © Philipp Soldunov</span>
					</div>
				</footer>
			</body>
		</html>
	);
}
