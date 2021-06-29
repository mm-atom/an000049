import knex, { Knex } from 'knex';
import anylogger from 'anylogger';
import config from '@mmstudio/config';

const logger = anylogger('@mmstudio/an000049');
const db = config.dbconfig as Knex.Config;

const pg = knex({
	debug: true,
	...db,
	log: logger
});

export default function an49() {
	return pg;
}
