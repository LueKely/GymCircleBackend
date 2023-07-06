export default {
	findLatestId(objects: any) {
		let latestDate = '0000-00-00'; // Initialize with a very early date
		let latestId = null;
		let latestName = '';

		for (let i = 0; i < objects.length; i++) {
			const currentDate = objects[i].date;

			if (currentDate > latestDate) {
				latestDate = currentDate;
				latestId = objects[i].id;
				latestName = objects[i].name;
			}
		}

		return {
			name: latestName,
			id: latestId,
			date: latestDate,
		};
	},
};
