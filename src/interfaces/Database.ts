interface IDatabase {
	getConnectionString: () => string;
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
}

export default IDatabase;
