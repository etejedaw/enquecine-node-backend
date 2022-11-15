import ScrapeHtml from "../interfaces/ScrapeHtml";

class Scraper {
	readonly #html: string;
	readonly #scrapeHtml: ScrapeHtml;

	constructor(html: string, scrapeHtml: ScrapeHtml) {
		this.#html = html;
		this.#scrapeHtml = scrapeHtml;
	}

	load(): unknown {
		return this.#scrapeHtml.load(this.#html);
	}
}

export default Scraper;
