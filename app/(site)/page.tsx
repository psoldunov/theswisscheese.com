import Image from 'next/image';
import Link from 'next/link';
import phil from '../assets/phil.png';
import codewars from '../assets/codewars.svg';
import freeCodeCamp from '../assets/freeCodeCamp.svg';
import github from '../assets/GitHub.svg';

import DogGallery from './_layout/DogGallery';

function getAge(birthdayDate: string) {
	const birthday = new Date(birthdayDate);
	const ageDifMs = Date.now() - birthday.getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function Home() {
	return (
		<>
			<main>
				<div className='main-container'>
					<div className='page-preheader'>
						<h1 className='page-h1'>Philipp&apos;s Little GitHub Corner</h1>
						<p className='ph-p'>
							This website was built in 2020 as a requirement for my{' '}
							<b>
								<Link target='_blank' href='https://www.foundersandcoders.com/'>
									Founders and Coders
								</Link>
							</b>{' '}
							application but I may evolve it into full-fledged portfolio site
							in the future.
							<br />
							<br />
							Keep an eye out for the updates!
						</p>
					</div>
					<section id='intro' className='page-hero-flex'>
						<div className='hero-flex-left'>
							<h2 className='intro-h2'>
								Hi! My name is <span className='span-hl'>Philipp Soldunov</span>
							</h2>
							<p>
								I am {getAge('1992-03-03')} years old programmer in the making
								and a blue belt in{' '}
								<Link
									target='_blank'
									href='https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu'>
									BJJ
								</Link>
								.<br />
								<br />I was born in the beautiful city of{' '}
								<Link
									target='_blank'
									href='https://en.wikipedia.org/wiki/Saint_Petersburg'>
									St. Petersburg
								</Link>{' '}
								and now reside in not-so-sunny{' '}
								<Link
									target='_blank'
									href='https://en.wikipedia.org/wiki/Tallinn'>
									Tallinn
								</Link>
								. I worked for many years as a Marketing manager for a
								construction firm but now I mostly daylight as kick-ass
								freelance{' '}
								<Link target='_blank' href='https://webflow.com'>
									Webflow
								</Link>{' '}
								developer. My dream is to learn JavaScript and Node.js and to
								create real applications for web and personal computers.
								<br />
								<br /> I am interested in coding (Well, duh!), everything
								tech-related, drone videography and photography.
							</p>
						</div>
						<div className='hero-flex-right'>
							<Image
								className='hero-img'
								src={phil}
								alt='Philipp Soldunov'
								placeholder='blur'
							/>
						</div>
					</section>
					<section id='why' className='section'>
						<div className='flex-container'>
							<h2 className='section-h2'>
								Why was I applying for <span className='span-hl'>F&C</span>{' '}
								programme?
							</h2>
							<p className='section-p'>
								Since I was a child, I was always fascinated with computers and
								everything that those machines can do. When I was 12, I dipped
								my toes into HTML by messing around with Macromedia Dreamviewer,
								changing its default templates to whatever I thought looked
								cool! Unfortunately, at the time I was finishing my high school,
								learning code was not as accessible as it is now and I choose a
								different life path...
								<br />
								<br />
								It was time to change things!
								<br />
								<br />I have decided to rectify my past mistakes and learn
								JavaScript. As I&apos;ve written above, my dream is to make real
								applications and I believe that knowing JS together with Node.js
								will make my dream come true. I have quite a few hours under my
								belt writing JavaScript but I feel that my coding journey lacks
								structure and peer interaction that bootcamp such as Founders
								and Coders can provide. So I am making this website to show you
								my commitement to learn and excel at coding!
							</p>
							<Link
								target='_blank'
								className='btn-normal'
								href='https://github.com/psoldunov/psoldunov.github.io'>
								GitHub Repository
							</Link>
						</div>
					</section>
					<DogGallery />
					<section id='contact' className='section'>
						<div className='flex-container'>
							<h2 className='section-h2 h2-small'>
								Links <code>&&</code> Contacts
							</h2>
							<p className='section-p'>
								Please find links to my relevant profiles below!
							</p>
							<div className='links-grid'>
								<Link
									className='soc-link'
									href='https://www.codewars.com/users/psoldunov'
									target='_blank'>
									<Image width={48} src={codewars} alt='Codewars' />
								</Link>
								<Link
									className='soc-link'
									href='https://github.com/psoldunov'
									target='_blank'>
									<Image width={48} src={github} alt='GitHub' />
								</Link>
								<Link
									className='soc-link'
									href='https://www.freecodecamp.org/psoldunov'
									target='_blank'>
									<Image width={48} src={freeCodeCamp} alt='freeCodeCamp' />
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
