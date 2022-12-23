import IMongoDb from "../interfaces/MongoDb";
import ConfigurationEnum from "../enums/Configuration";
import Configuration from "./Configuration";

const configuration = new Configuration();

export const MongoConfig: IMongoDb = {
	DB_PORT: configuration.get(ConfigurationEnum.DB_PORT),
	DB_HOST: configuration.get(ConfigurationEnum.DB_HOST),
	DB_USERNAME: configuration.get(ConfigurationEnum.DB_USERNAME),
	DB_PASSWORD: configuration.get(ConfigurationEnum.DB_PASSWORD)
};
