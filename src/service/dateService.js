const dateService = {
	getCurrentMounth: () => {
		let fulldate = new Date();
		let month = fulldate.getMonth();
		return month + 1;
	},
	getCurrentYear: () => {
		let fulldate = new Date();
		let year = fulldate.getFullYear();
		return year;
	},
};

export default dateService;
