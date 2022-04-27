import { CountryResponse } from './../../Interfaces';
import React, { useEffect } from 'react';

import './search.styles.scss';
export interface SearchProps {
	countries: CountryResponse[];
	selectedCountry: string;
	setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
	CountryInfo: (country: CountryResponse) => Promise<void>;
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
}
const Search: React.FC<SearchProps> = ({
	countries,
	selectedCountry,
	setSelectedCountry,
	CountryInfo,
	input,
	setInput,
}) => {
	useEffect(() => {
		setInput(selectedCountry);
	}, [selectedCountry, setInput]);
	const onClickHandle = (country: CountryResponse) => {
		if (window.innerWidth < 800) {
			window.location.href = '#countryInfo';
		}

		setSelectedCountry(country.country);
		CountryInfo(country);
		setInput(country.country);
	};

	return (
		<div className='search' id='search'>
			<label htmlFor='search_input'>
				<input
					type='text'
					id='search__input'
					value={input}
					onChange={(event) => setInput(event.target.value)}
					className='search__input'
					placeholder='Search Countries'
				/>
			</label>
			<div className='result'>
				{countries
					.filter((country, index) =>
						country.country.toLowerCase().includes(input.toLowerCase()),
					)
					.map((country, index, arr) => {
						if (index < 5) {
							return (
								<a
									id={country.countryInfo.iso2}
									className='country'
									key={country.countryInfo.iso2}
									onClick={() => onClickHandle(country)}
									href='#countryInfo'
								>
									{country.country}
								</a>
							);
						} else {
							return undefined;
						}
					})}
			</div>
		</div>
	);
};
export default Search;
