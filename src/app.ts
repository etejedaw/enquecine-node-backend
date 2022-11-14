import Server from "./Server";
import MongoDb from "./database/MongoDb";
import Configuration from "./configuration/Configuration";
import ConfigurationEnum from "./enums/Configuration";

async function main(): Promise<void> {
	const configuration = new Configuration();
	try {
		const server = new Server();
		server.listen(Number(configuration.get(ConfigurationEnum.PORT)));
		console.log("connected on port 3000");

		const mongoDb = new MongoDb({
			DB_PORT: configuration.get(ConfigurationEnum.DB_PORT),
			DB_HOST: configuration.get(ConfigurationEnum.DB_HOST),
			DB_USERNAME: configuration.get(ConfigurationEnum.DB_USERNAME),
			DB_PASSWORD: configuration.get(ConfigurationEnum.DB_PASSWORD)
		});
		await mongoDb.connect();
		console.log("Database in port 27017");
	} catch (error) {
		console.log(error);
	}
}

void main();
