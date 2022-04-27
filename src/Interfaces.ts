export interface CountryResponse {
	updated: number;
	country: string;
	countryInfo: {
		_id: number;
		iso2: string;
		iso3: string;
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	continent: string;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
}
export interface GlobalResponse {
	updated: number;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
	affectedCountries: number;
}
export interface ViewPortType {
	width: string;
	height: string;
	latitude: number;
	longitude: number;
	zoom: number;
	transitionDuration: number;
	transitionInterpolator: any;
	transitionEasing: any;
}
export type choiceType =
	| 'active'
	| 'cases'
	| 'recovered'
	| 'critical'
	| 'deaths';
