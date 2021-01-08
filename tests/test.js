const test = require('ava');

const { default: a } = require('../dist/index');

const tablename = 'test_tb001';
const pg = a();

test.before(async () => {
	await pg.schema.dropTableIfExists(tablename);
	await pg.schema.createTableIfNotExists(tablename, (t) => {
		t.string('name');
		t.string('text');
	});
	const tb = pg(tablename);
	await tb.insert([{ name: 'mmstudio001' }, { name: 'mmstudio002' }, { name: 'mmstudio003' }]);
});

test.after(async () => {
	await pg.schema.dropTableIfExists(tablename);
});

test('postgres query', async (t) => {
	const tb = pg(tablename);
	const r = await await tb.select('name', 'text');
	t.assert(r.length === 3);
});

test('postgres count', async (t) => {
	const tb = pg(tablename);
	// const r = await tb.count('*', { as: 'cnt' }).first();
	const r = await tb.count({ cnt: '*' }).first();
	t.is(r.cnt, '3');
});
