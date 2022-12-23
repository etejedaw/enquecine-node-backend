import Server from "./Server";
import MongoDb from "./database/MongoDb";
import Configuration from "./configuration/Configuration";
import ConfigurationEnum from "./enums/Configuration";
import CineClubUach from "./libs/cineClubUach/CineClubUach";
import { MongoConfig } from "./configuration/MongoConfig";

async function main(): Promise<void> {
	const configuration = new Configuration();
	try {
		const server = new Server();
		const PORT = Number(configuration.get(ConfigurationEnum.PORT));
		server.listen(PORT);
		console.log("connected on port 3000");

		const mongoDb = new MongoDb(MongoConfig);
		await mongoDb.connect();
		console.log("Database in port 27017");

		const cineClubUach = new CineClubUach();
		await cineClubUach.init();
	} catch (error) {
		console.log(error);
	}
}

void main();
