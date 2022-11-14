import request from "request-promise";
import ExtractHtml from "../interfaces/ExtractHtml";

class RequestPromise implements ExtractHtml {
	async get(url: string): Promise<string> {
		return await request.get(url);
	}
}

export default RequestPromise;
