import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<header className='navbar'>
				<div className='main-container navbar-container'>
					<div className='navbar-inner'>
						<Link className='logo-link' href='/'>
							<Image
								src='assets/ps-logo.svg'
								height='48'
								width='48'
								alt='GitHub'
							/>
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
			<main>
				<div className='main-container'>
					<div className='page-preheader'>
						<h1 className='page-h1'>Philipp&apos;s Little GitHub Corner</h1>
						<p className='ph-p'>
							This website was build as a requirement for my{' '}
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
								I am 31 years old programmer in the making and a blue belt in{' '}
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
								width={48}
								height={48}
								className='hero-img'
								src='/assets/phil.png'
								alt='Philipp Soldunov'
							/>
						</div>
					</section>
					<section id='why' className='section'>
						<div className='flex-container'>
							<h2 className='section-h2'>
								Why I am applying for <span className='span-hl'>F&C</span>{' '}
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
								But now, it is time to change things!
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
					<section id='bonus' className='section'>
						<aside className='flex-container'>
							<h2 className='section-h2'>Bonus!</h2>
							<p className='section-p'>
								One more fact about me: I have a dog named <b>Richie</b> and who
								is a{' '}
								<Link
									target='_blank'
									href='https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel'>
									Cavalier King Charles Spaniel
								</Link>
								. He is 3 years old and he is the most spoiled dog on the planet
								Earth!
								<br />
								<br />
								To see his picture click on the button below.
							</p>
							<Link href='#dogGallery' className='btn-normal'>
								Show me Richie!
							</Link>
							<div id='dogGallery' className='dog-gallery'>
								<div className='dog-button-wrap'>
									<Link
										id='ph1'
										className='dog-tab-link active-link'
										href='#tab-1'>
										1
									</Link>
									<Link id='ph2' className='dog-tab-link' href='#tab-2'>
										2
									</Link>
									<Link id='ph3' className='dog-tab-link' href='#tab-3'>
										3
									</Link>
									<Link id='ph4' className='dog-tab-link' href='#tab-4'>
										4
									</Link>
									<Link id='ph5' className='dog-tab-link' href='#tab-5'>
										5
									</Link>
								</div>
								<div className='dog-tabs-wrap'>
									<div id='tab-1' className='dog-tab active-tab'>
										<Image
											width={48}
											height={48}
											src='/assets/richie-1.JPG'
											alt='Cavalier'
										/>
									</div>
									<div id='tab-2' className='dog-tab'>
										<Image
											width={48}
											height={48}
											src='/assets/richie-2.JPG'
											alt='Cavalier'
										/>
									</div>
									<div id='tab-3' className='dog-tab'>
										<Image
											width={48}
											height={48}
											src='/assets/richie-3.JPG'
											alt='Cavalier'
										/>
									</div>
									<div id='tab-4' className='dog-tab'>
										<Image
											width={48}
											height={48}
											src='/assets/richie-4.JPG'
											alt='Cavalier'
										/>
									</div>
									<div id='tab-5' className='dog-tab'>
										<Image
											width={48}
											height={48}
											src='/assets/richie-5.JPG'
											alt='Cavalier'
										/>
									</div>
								</div>
							</div>
						</aside>
					</section>
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
									<Image
										width={48}
										height={48}
										src='/assets/codewars.svg'
										alt='Codewars'
									/>
								</Link>
								<Link
									className='soc-link'
									href='https://github.com/psoldunov'
									target='_blank'>
									<Image
										width={48}
										height={48}
										src='/assets/GitHub.svg'
										alt='GitHub'
									/>
								</Link>
								<Link
									className='soc-link'
									href='https://www.freecodecamp.org/psoldunov'
									target='_blank'>
									<Image
										width={48}
										height={48}
										src='/assets/freeCodeCamp.svg'
										alt='freeCodeCamp'
									/>
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>

			<footer className='footer'>
				<div className='main-container'>
					<span>2023 © Philipp Soldunov</span>
				</div>
			</footer>
		</>
	);
}
