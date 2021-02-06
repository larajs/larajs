const sequelize = require('../databases');

async function reset() {
	console.log('Will rewrite the database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{ username: 'administrator', password: 'password' },
	]);

	// // Let's create random instruments for each orchestra
	// for (const orchestra of await sequelize.models.orchestra.findAll()) {
	// 	for (let i = 0; i < 10; i++) {
	// 		const type = pickRandom([
	// 			'violin',
	// 		]);
	// 		await orchestra.createInstrument({
	// 			type: type,
	// 			purchaseDate: randomDate()
	// 		});
	// 		// The following would be equivalent in this case:
	// 		// await sequelize.models.instrument.create({
	// 		// 	type: type,
	// 		// 	purchaseDate: randomDate(),
	// 		// 	orchestraId: orchestra.id
	// 		// });
	// 	}
	// }

	console.log('Done!');
}

reset();
