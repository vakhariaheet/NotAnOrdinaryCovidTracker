import React from 'react';
import CountUp from 'react-countup';

import './ShowData.styles.scss';
export interface ShowDataProps {
	criticalCases: number;
	recoveredCases: number;
	confirmedCases: number;
	deathCases: number;
	selectedCountry: string;
	activeCases: number;
	id: string;
}
const ShowData: React.FC<ShowDataProps> = ({
	criticalCases,
	recoveredCases,
	confirmedCases,
	deathCases,
	selectedCountry,
	activeCases,
	id,
}) => {
	return (
		<div className='datashow' id={id}>
			<h1
				className='datashow__heading'
				id={selectedCountry !== 'Global' ? 'countryName' : ''}
			>
				{selectedCountry ? selectedCountry : 'Country'}
			</h1>
			<div className='datashow__active datashow__item'>
				<svg
					className='datashow__item_svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 512'
				>
					<title>Critical Cases</title>
					<path
						fill='currentColor'
						d='M624,352H611.88c-28.51,0-42.79-34.47-22.63-54.63l8.58-8.57a16,16,0,1,0-22.63-22.63l-8.57,8.58C546.47,294.91,512,280.63,512,252.12V240a16,16,0,0,0-32,0v12.12c0,28.51-34.47,42.79-54.63,22.63l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H368a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.57a16,16,0,1,0,22.63,22.63l8.57-8.58c20.16-20.16,54.63-5.88,54.63,22.63V496a16,16,0,0,0,32,0V483.88c0-28.51,34.47-42.79,54.63-22.63l8.57,8.58a16,16,0,1,0,22.63-22.63l-8.58-8.57C569.09,418.47,583.37,384,611.88,384H624a16,16,0,0,0,0-32ZM480,384a32,32,0,1,1,32-32A32,32,0,0,1,480,384ZM346.51,213.33h16.16a21.33,21.33,0,0,0,0-42.66H346.51c-38,0-57.05-46-30.17-72.84l11.43-11.44A21.33,21.33,0,0,0,297.6,56.23L286.17,67.66c-26.88,26.88-72.84,7.85-72.84-30.17V21.33a21.33,21.33,0,0,0-42.66,0V37.49c0,38-46,57.05-72.84,30.17L86.4,56.23A21.33,21.33,0,0,0,56.23,86.39L67.66,97.83c26.88,26.88,7.85,72.84-30.17,72.84H21.33a21.33,21.33,0,0,0,0,42.66H37.49c38,0,57.05,46,30.17,72.84L56.23,297.6A21.33,21.33,0,1,0,86.4,327.77l11.43-11.43c26.88-26.88,72.84-7.85,72.84,30.17v16.16a21.33,21.33,0,0,0,42.66,0V346.51c0-38,46-57.05,72.84-30.17l11.43,11.43a21.33,21.33,0,0,0,30.17-30.17l-11.43-11.43C289.46,259.29,308.49,213.33,346.51,213.33ZM160,192a32,32,0,1,1,32-32A32,32,0,0,1,160,192Zm80,32a16,16,0,1,1,16-16A16,16,0,0,1,240,224Z'
					></path>
				</svg>

				<h2 className='datashow__critical--text datashow__item--text'>
					{'   '}Active :{' '}
					{activeCases > 0 ? (
						<CountUp start={0} end={activeCases} duration={2.5} />
					) : (
						0
					)}
				</h2>
			</div>
			<div className='datashow__critical datashow__item'>
				<svg className='datashow__item_svg' viewBox='0 0 213.8 220.9'>
					<style type='text/css' />
					<title>Active Cases</title>
					<path
						fill='currentColor'
						d='M106.9,220.9c-0.7,0-1.4-0.2-2-0.6C100,216.9-14.8,137.3,1.6,52.4C10.4,6.8,35.9,0,50.3,0
	c23.6,0,47.2,17.2,56.6,34.7c9.4-17.5,33-34.7,56.6-34.7c14.4,0,39.9,6.8,48.7,52.4c16.4,85-98.4,164.6-103.3,167.9
	C108.3,220.7,107.6,220.9,106.9,220.9z M50.3,7C28.8,7,14.4,23.2,8.5,53.7c-14.4,74.6,83.2,148.4,98.4,159.4
	c15.3-11,112.8-84.8,98.4-159.4C197.9,15.1,178.4,7,163.5,7c-23.9,0-48.7,20.7-53.2,37.8c-0.4,1.5-1.8,2.6-3.4,2.6
	c-1.6,0-3-1.1-3.4-2.6C99,27.7,74.2,7,50.3,7z M88.5,169.8L114,92.7l16.2,62.9c0.4,1.5,1.6,2.5,3.2,2.6c1.5,0.1,2.9-0.8,3.5-2.2
	l17.3-42.1h47.1c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5h-49.4c-1.4,0-2.7,0.9-3.2,2.2l-14.1,34.5l-16.5-64.2
	c-0.4-1.5-1.7-2.6-3.3-2.6c-1.6-0.1-3,0.9-3.4,2.4l-25,75.7L68.2,62.2c-0.3-1.5-1.5-2.7-3.1-2.8c-1.5-0.2-3,0.7-3.6,2.1l-18.8,45.4
	H12.6c-1.9,0-3.5,1.6-3.5,3.5c0,1.9,1.6,3.5,3.5,3.5h32.5c1.4,0,2.7-0.9,3.2-2.2L63.6,75l18.2,94.4c0.3,1.6,1.6,2.7,3.2,2.8
	c0.1,0,0.2,0,0.2,0C86.7,172.2,88.1,171.3,88.5,169.8z'
					/>
				</svg>
				<h2 className='datashow__critical--text datashow__item--text'>
					Critical :{' '}
					{criticalCases > 0 ? (
						<CountUp start={0} end={criticalCases} duration={2.5} />
					) : (
						0
					)}
				</h2>
			</div>
			<div className='datashow__confirmed datashow__item'>
				<svg
					className='datashow__item_svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 384 512'
				>
					<title>Confirmed Case</title>
					<path
						fill='currentColor'
						d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z'
					></path>
				</svg>
				<h2 className='datashow__confirmed--text datashow__item--text'>
					Confirmed :{' '}
					{confirmedCases > 0 ? (
						<CountUp start={0} end={confirmedCases} duration={2.5} />
					) : (
						0
					)}
				</h2>
			</div>
			<div className='datashow__recoverd datashow__item'>
				<svg
					className='datashow__item_svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 512'
				>
					<title>Recovered</title>
					<path
						fill='currentColor'
						d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z'
					></path>
				</svg>
				<h2 className='datashow__confirmed--text datashow__item--text'>
					Recovered :{' '}
					{recoveredCases > 0 ? (
						<CountUp start={0} end={recoveredCases} duration={2.5} />
					) : (
						0
					)}
				</h2>
			</div>
			<div className='datashow__died datashow__item'>
				<svg
					className='datashow__item_svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 512'
				>
					<title>Death</title>
					<path
						fill='currentColor'
						d='M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z'
					/>
				</svg>
				<h2 className='datashow__died--text datashow__item--text'>
					Died :{' '}
					{deathCases > 0 ? (
						<CountUp start={0} end={deathCases} duration={2.5} />
					) : (
						0
					)}
				</h2>
			</div>
		</div>
	);
};
export default ShowData;
