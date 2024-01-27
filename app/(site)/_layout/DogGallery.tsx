'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import richie1 from '../../assets/richie1.jpg';
import richie2 from '../../assets/richie2.jpg';
import richie3 from '../../assets/richie3.jpg';
import richie4 from '../../assets/richie4.jpg';
import richie5 from '../../assets/richie5.jpg';

function getAge(birthdayDate: string) {
	const birthday = new Date(birthdayDate);
	const ageDifMs = Date.now() - birthday.getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function DogGallery() {
	const [tabsVisible, setTabsVisible] = useState(false);
	const [activeTab, setActiveTab] = useState(1);

	return (
		<section id='bonus' className='section'>
			<aside className='flex-container'>
				<h2 className='section-h2'>Bonus!</h2>
				<p className='section-p'>
					One more fact about me: I have a dog named <b>Richie</b> and who is a{' '}
					<Link
						target='_blank'
						href='https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel'>
						Cavalier King Charles Spaniel
					</Link>
					. He is {getAge('2017-07-07')} years old and he is the most spoiled
					dog on the planet Earth!
					<br />
					<br />
					To see his picture click on the button below.
				</p>
				<Link
					href='#dogGallery'
					onClick={() => setTabsVisible(true)}
					className='btn-normal'>
					Show me Richie!
				</Link>
				<div
					id='dogGallery'
					className={`dog-gallery ${tabsVisible ? 'flex' : 'hidden'}`}>
					<div className='dog-button-wrap'>
						<button
							id='ph1'
							onClick={() => setActiveTab(1)}
							className={`dog-tab-link ${activeTab === 1 && 'active-link'}`}>
							1
						</button>
						<button
							id='ph2'
							onClick={() => setActiveTab(2)}
							className={`dog-tab-link ${activeTab === 2 && 'active-link'}`}>
							2
						</button>
						<button
							id='ph3'
							onClick={() => setActiveTab(3)}
							className={`dog-tab-link ${activeTab === 3 && 'active-link'}`}>
							3
						</button>
						<button
							id='ph4'
							onClick={() => setActiveTab(4)}
							className={`dog-tab-link ${activeTab === 4 && 'active-link'}`}>
							4
						</button>
						<button
							id='ph5'
							onClick={() => setActiveTab(5)}
							className={`dog-tab-link ${activeTab === 5 && 'active-link'}`}>
							5
						</button>
					</div>
					<div className='dog-tabs-wrap'>
						<div
							id='tab-1'
							className={`dog-tab ${activeTab === 1 && 'active-tab'}`}>
							<Image src={richie1} alt='Cavalier' />
						</div>
						<div
							id='tab-2'
							className={`dog-tab ${activeTab === 2 && 'active-tab'}`}>
							<Image src={richie2} alt='Cavalier' />
						</div>
						<div
							id='tab-3'
							className={`dog-tab ${activeTab === 3 && 'active-tab'}`}>
							<Image src={richie3} alt='Cavalier' />
						</div>
						<div
							id='tab-4'
							className={`dog-tab ${activeTab === 4 && 'active-tab'}`}>
							<Image src={richie4} alt='Cavalier' />
						</div>
						<div
							id='tab-5'
							className={`dog-tab ${activeTab === 5 && 'active-tab'}`}>
							<Image src={richie5} alt='Cavalier' />
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
}
