import RequestPromise from "../../../src/helpers/RequestPromise";
import Getter from "../../../src/helpers/Getter";
import Pages from "../../../src/libs/cineClubUach/Pages";

const baseUrl = "http://2020.cineclubuach.cl/";
let html: string | undefined = "";

beforeAll(async () => {
	const requestPromise = new RequestPromise();
	const getter = await Getter.build(baseUrl, requestPromise);
	html = getter.html;
});

test("Should return an array of urls", () => {
	if (html == null) return;
	const pages = new Pages(baseUrl, html);
	expect(pages.init()).toContain(baseUrl);
});
