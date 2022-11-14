import ExtractHtml from "../interfaces/ExtractHtml";

class Getter {
	readonly #url: string;
	readonly #html?: string;

	private constructor(url: string, html?: string) {
		this.#url = url;
		this.#html = html;
	}

	static async build(url: string, extract: ExtractHtml): Promise<Getter> {
		try {
			const html = await extract.get(url);
			return new Getter(url, html);
		} catch {
			const html = undefined;
			return new Getter(url, html);
		}
	}

	get html(): string | undefined {
		return this.#html;
	}
}

export default Getter;
