import Cheerio, { CheerioAPI } from "../../helpers/Cheerio";
import Scraper from "../../helpers/Scraper";
import { cleanRepeat } from "../../utils/arrayExtended";

class Pages {
	readonly #baseUrl: string;
	readonly #html: string;

	constructor(baseUrl: string, html: string) {
		this.#baseUrl = baseUrl;
		this.#html = html;
	}

	init(): string[] {
		const cleanUrl = this.#extractPages().map(this.#cleanUrls);
		const links = this.#transformToLink(cleanUrl);
		links.unshift(this.#baseUrl);
		return cleanRepeat(links);
	}

	#extractPages(): string[] {
		const cheerio = new Cheerio();
		const scraper = new Scraper(this.#html, cheerio);
		const $ = scraper.load() as CheerioAPI;
		return $(".em-pagination.em-ajax .page-numbers")
			.map((_idx, elem) => $(elem).attr("href"))
			.get();
	}

	#cleanUrls(url: string): string {
		return url[0] === "/" ? url.slice(1).trim() : url.trim();
	}

	#transformToLink(urls: string[]): string[] {
		return urls.map(url => `${this.#baseUrl}${url}`);
	}
}

export default Pages;
