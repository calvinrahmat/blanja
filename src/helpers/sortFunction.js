export function priceLow(a, b) {
	const hargaA = a.harga;
	const hargaB = b.harga;

	let comparison = 0;
	if (hargaA > hargaB) {
		comparison = 1;
	} else if (hargaA < hargaB) {
		comparison = -1;
	}
	return comparison;
}

export function priceHigh(a, b, value) {
	const hargaA = a.harga;
	const hargaB = b.harga;

	let comparison = 0;
	if (hargaA < hargaB) {
		comparison = 1;
	} else if (hargaA > hargaB) {
		comparison = -1;
	}
	return comparison;
}

export function nameAsc(a, b, value) {
	const namaA = a.nama;
	const namaB = b.nama;

	let comparison = 0;
	if (namaA > namaB) {
		comparison = 1;
	} else if (namaA < namaB) {
		comparison = -1;
	}
	return comparison;
}

export function nameDesc(a, b, value) {
	const namaA = a.nama.toUpperCase();
	const namaB = b.nama.toUpperCase();

	let comparison = 0;
	if (namaA < namaB) {
		comparison = 1;
	} else if (namaA > namaB) {
		comparison = -1;
	}
	return comparison;
}

export function newProduct(a, b, value) {
	const idA = a.id;
	const idB = b.id;

	let comparison = 0;
	if (idA < idB) {
		comparison = 1;
	} else if (idA > idB) {
		comparison = -1;
	}
	return comparison;
}

export function oldProduct(a, b, value) {
	const idA = a.id;
	const idB = b.id;

	let comparison = 0;
	if (idA > idB) {
		comparison = 1;
	} else if (idA < idB) {
		comparison = -1;
	}
	return comparison;
}
