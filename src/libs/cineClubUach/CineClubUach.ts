import Pages from "./Pages";
import RequestPromise from "../../helpers/RequestPromise";
import Getter from "../../helpers/Getter";

class CineClubUach {
	readonly #baseUrl: string;

	constructor() {
		this.#baseUrl = "http://2020.cineclubuach.cl/";
	}

	async getHtml(): Promise<string | undefined> {
		const requestPromise = new RequestPromise();
		const getter = await Getter.build(this.#baseUrl, requestPromise);
		return getter.html;
	}

	async getPages(): Promise<string[]> {
		const mainPage = await this.getHtml();
		if (mainPage == null) return [];
		const pages = new Pages(this.#baseUrl, mainPage);
		return pages.init();
	}
}

export default CineClubUach;
