interface Global {
    NewConfirmed?: number,
    TotalConfirmed?: number,
    NewDeaths?: number,
    TotalDeaths?: number,
    NewRecovered?: number,
    TotalRecovered?: number,
    Date?: string
}

interface CountryData {
    Country?: string,
    CountryCode?: string,
    Slug?: string,
    NewConfirmed?: number,
    TotalConfirmed?: number,
    NewDeaths?: number,
    TotalDeaths?: number,
    NewRecovered?: number,
    TotalRecovered?: number;
}

interface Countries {
    Countries: CountryData[];
}

export interface CovidApiData {
    Global: Global,
    Countries: Countries
}