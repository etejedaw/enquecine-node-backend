import ConfigurationEnum from "../enums/Configuration";

interface IConfiguration {
	get: (key: ConfigurationEnum) => string;
}

export default IConfiguration;
