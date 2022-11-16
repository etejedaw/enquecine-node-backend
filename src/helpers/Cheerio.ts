import { CheerioAPI, load as cheerio } from "cheerio";
import ScrapeHtml from "../interfaces/ScrapeHtml";

class Cheerio implements ScrapeHtml {
	load(html: string): CheerioAPI {
		return cheerio(html);
	}
}

export default Cheerio;
export { CheerioAPI };
