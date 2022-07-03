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
		fetch('https://disease.sh/v3/covid-19/all')
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
