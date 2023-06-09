export const intFormatter = (number) => {
	if (typeof number === "undefined" || number === null) {
		return "";
	}
  number = Math.round(number);

	if (number > 10000000000) {
		return (number / 1000000000).toFixed(0) + "B";
	} else if (number > 1000000000) {
		return (number / 1000000000).toFixed(1) + "B";
	} else if (number > 10000000 ) {
		return (number / 1000000).toFixed(0) + "M";
  } else if (number > 1000000) {
		return (number / 1000000).toFixed(1) + "M";
	} else if (number > 10000 ) {
		return (number / 1000).toFixed(0) + "K";
  } else if (number > 1000) {
		return (number / 1000).toFixed(1) + "K";
	} else {
		return number.toFixed(0);
	}
};

export const floatFormatter = (number) => {
	return Math.round10(number, -2);
};
