import { GlobalResponse } from './../../Interfaces';
import React, { useState, useEffect } from 'react';
import ShowData from '../ShowData/ShowData.component';

export interface DailyCasesProps {}
const DailyCases: React.FC<DailyCasesProps> = () => {
	const [criticalCases, setCriticalCases] = useState(0);
	const [confirmedCases, setConfirmedCases] = useState(0);
	const [recoveredCases, setRecoveredCases] = useState(0);
	const [deathCases, setDeathCases] = useState(0);
	const [activeCases, setActiveCases] = useState(0);
	useEffect(() => {
		fetch('https://corona.lmao.ninja/v2/all', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
				'x-rapidapi-key': '59d0b2c3c0msh86e340ae9c71bb8p13d7cbjsn0c90670232b6',
			},
		})
			.then((response) => response.json())
			.then((stats: GlobalResponse) => {
				const { critical, cases, deaths, recovered, active } = stats;
				setCriticalCases(critical);
				setConfirmedCases(cases);
				setRecoveredCases(recovered);
				setDeathCases(deaths);
				setActiveCases(active);
			})
			.catch((err) => {
				console.log(err);
			});
		return undefined;
	}, []);
	return (
		<ShowData
			criticalCases={criticalCases}
			recoveredCases={recoveredCases}
			deathCases={deathCases}
			confirmedCases={confirmedCases}
			activeCases={activeCases}
			selectedCountry={'Global'}
			id={'global'}
		/>
	);
};
export default DailyCases;
