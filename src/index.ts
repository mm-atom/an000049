import knex, { Knex } from 'knex';
import anylogger from 'anylogger';
import config from '@mmstudio/config';


export type Transaction = Knex.Transaction;
export type Config = Knex.Config;

// From knex
// Container type for situations when we want a partial/intersection eventually
// but the keys being selected or additional properties being augmented are not
// all known at once and we would want to effectively build up a partial/intersection
// over multiple steps.
type DeferredKeySelection<
	// The base of selection. In intermediate stages this may be unknown.
	// If it remains unknown at the point of resolution, the selection will fall back to any
	TBase,
	// Union of keys to be selected
	// In intermediate stages this may be never.
	TKeys extends string,
	// Changes how the resolution should behave if TKeys is never.
	// If true, then we assume that some keys were selected, and if TKeys is never, we will fall back to any.
	// If false, and TKeys is never, then we select TBase in its entirety
	THasSelect extends true | false = false,
	// Mapping of aliases <key in result> -> <key in TBase>
	TAliasMapping extends Record<string, unknown> = Record<string, never>,
	// If enabled, then instead of extracting a partial, during resolution
	// we will pick just a single property.
	TSingle extends boolean = false,
	// Extra props which will be intersected with the result
	TIntersectProps extends Record<string, unknown> = Record<string, never>,
	// Extra props which will be unioned with the result
	TUnionProps = never
	> = {
		// These properties are not actually used, but exist simply because
		// typescript doesn't end up happy when type parameters are unused
		_base: TBase;
		_hasSelection: THasSelect;
		_keys: TKeys;
		_aliases: TAliasMapping;
		_single: TSingle;
		_intersectProps: TIntersectProps;
		_unionProps: TUnionProps;
	};

export type QueryBuilder<T> = Knex.QueryBuilder<T, DeferredKeySelection<T, never, false, Record<string, never>, false, Record<string, never>, never>[]>;

export type Callback<T> = (qb: QueryBuilder<T>) => unknown;

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
	return knex({
		debug: true,
		...config,
		log: logger
	});
}
