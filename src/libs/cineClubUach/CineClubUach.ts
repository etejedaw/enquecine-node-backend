import Pages from "./Pages";
import RequestPromise from "../../helpers/RequestPromise";
import Getter from "../../helpers/Getter";
import Extractor from "./Extractor";

class CineClubUach {
	readonly #baseUrl: string;

	constructor() {
		this.#baseUrl = "http://2020.cineclubuach.cl/";
	}

	async init(): Promise<any> {
		const pages = await this.getPages();
		const htmlList = [] as Array<Promise<string | undefined>>;

		pages.forEach(page => htmlList.push(this.getHtml(page)));
		const htmls = await Promise.all(htmlList);

		return htmls
			.map(html => {
				if (html === undefined) return undefined;
				const extractor = new Extractor(html);
				return extractor.init();
			})
			.filter(html => html !== undefined);
	}

	async getPages(): Promise<string[]> {
		const mainPage = await this.getHtml();
		if (mainPage == null) return [];
		const pages = new Pages(this.#baseUrl, mainPage);
		return pages.init();
	}

	async getHtml(html?: string): Promise<string | undefined> {
		const requestPromise = new RequestPromise();
		const htmlToExtract = html === undefined ? this.#baseUrl : html;
		const getter = await Getter.build(htmlToExtract, requestPromise);
		return getter.html;
	}
}

export default CineClubUach;
