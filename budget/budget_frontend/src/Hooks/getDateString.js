function getStingDate(date) {
	const d = new Date(date);

	const year = d.getFullYear();
	let month = (d.getMonth() + 1)
	let day = d.getDate();

	month < 10 ? month = `0${month}` : month = `${month}`
	day < 10 ? day = `0${day}` : day = `${day}`;
  
  return `${year}-${month}-${day}`;
}

module.exports = {
	getStingDate: getStingDate 
};