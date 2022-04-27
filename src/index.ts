import knex, { Knex } from 'knex';
import anylogger from 'anylogger';
import config from '@mmstudio/config';


export type Transaction = Knex.Transaction;
export type Config = Knex.Config;

const logger = anylogger('@mmstudio/an000049');
const db = config.dbconfig as Config;

const pg = knex({
	// debug: process.env.NODE_ENV === 'development',	// Can we do this?
	debug: true,
	...db,
	log: logger
});

export default function an49(config?: Config) {
	if (!config) {
		return pg;
	}
	return knex(config);
}
