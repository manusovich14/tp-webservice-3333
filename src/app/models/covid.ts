export class Covid {
  country_name: string;
  cases: string;
  total_cases_per_1m_population: string;
  total_recovered: string;
  deaths: string;

  Covid(country_name?: string, cases?: string, total_cases_per_1m_population?: string, total_recovered?: string, deaths?: string) {
    this.country_name = country_name;
    this.cases = cases;
    this.total_cases_per_1m_population = total_cases_per_1m_population;
    this.total_recovered = total_recovered;
    this.deaths = deaths;
  }
}
