import mongoose from "mongoose";
import IDatabase from "../interfaces/Database";
import IMongoDb from "../interfaces/MongoDb";

class MongoDb implements IDatabase {
	readonly #DB_USERNAME: string;
	readonly #DB_PASSWORD: string;
	readonly #DB_HOST: string;
	readonly #DB_PORT: string;

	constructor(environment: IMongoDb) {
		this.#DB_USERNAME = environment.DB_USERNAME;
		this.#DB_PASSWORD = environment.DB_PASSWORD;
		this.#DB_HOST = environment.DB_HOST;
		this.#DB_PORT = environment.DB_PORT;
	}

	async connect(): Promise<void> {
		const uri = this.getConnectionString();
		await mongoose.connect(uri);
	}

	getConnectionString(): string {
		return `mongodb://${this.#DB_USERNAME}:${this.#DB_PASSWORD}@${
			this.#DB_HOST
		}:${this.#DB_PORT}`;
	}

	async disconnect(): Promise<void> {
		await mongoose.disconnect();
	}
}

export default MongoDb;
