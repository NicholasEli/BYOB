export const loaderDelay = 3000;

export const getCSSVariable = (name) => {
	const root = document.querySelector(':root');
	const body = document.body;
	const style = getComputedStyle(body);
	const value = style.getPropertyValue(name);

	if (value) return value;
	return null;
};

export const setFont = (url) => {
	const link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = url;

	document.head.appendChild(link);
};

export const getFileExtension = (string) => {
	return '.' + string.substr(string.lastIndexOf('.') + 1).split('?')[0];
};

export const stringToSlug = function (name, company) {
	if (!name) return null;
	let string = name;
	if (company) string += '-' + company;
	let replace = string.toLowerCase();
	replace = replace.replace(/ /g, '-');
	replace = replace.replace(/\W+(?!$)/g, '-').toLowerCase();
	replace = replace.replace(/\W$/, '').toLowerCase();

	return replace;
};

/**
 * Creates aribtrary wait time based on miliseconds
 * @param { int } milliseconds
 * @return { promise } resolves once time has been reached
 * */
export const asyncTimeout = function (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Gets browser agent type
 * @return { object } { device, browser }
 * */
export const getNavigatorAgent = function () {
	const userAgent = navigator.userAgent;
	let device = null;
	let browser = null;

	if (userAgent.match(/Android/i)) device = 'android';
	if (userAgent.match(/BlackBerry/i)) device = 'blackberry';
	if (userAgent.match(/iPhone|iPad|iPod/i)) device = 'ios';
	if (userAgent.match(/Opera Mini/i)) device = 'opera-mini';
	if (userAgent.match(/IEMobile/i)) device = 'ie-mobile';
	if (userAgent.match(/IEMobile/i)) device = 'ie-mobile';
	if (!device) device = 'desktop';

	if (
		userAgent.indexOf('chrome') > -1 ||
		userAgent.indexOf('Chrome') > -1 ||
		userAgent.indexOf('CriOS') > -1
	) {
		browser = 'chrome';
		return { browser, device };
	}
	if (
		userAgent.indexOf('firefox') > -1 ||
		userAgent.indexOf('Firefox') > -1 ||
		userAgent.indexOf('FxiOS') > -1
	) {
		browser = 'firefox';
		return { browser, device };
	}
	if (
		navigator.vendor &&
		navigator.vendor.indexOf('Apple') > -1 &&
		userAgent.indexOf('CriOS') == -1 &&
		userAgent.indexOf('FxiOS') == -1
	) {
		browser = 'safari';
		return { browser, device };
	}
	if (userAgent.indexOf('opr') > -1 || userAgent.indexOf('Opr') > -1) {
		browser = 'opera';
		return { browser, device };
	}
	if (
		userAgent.indexOf('edg') > -1 ||
		userAgent.indexOf('edge') > -1 ||
		userAgent.indexOf('Edg') > -1 ||
		userAgent.indexOf('Edge') > -1
	) {
		browser = 'edge';
		return { browser, device };
	}
	if (userAgent.indexOf('trident') > -1 || userAgent.indexOf('Trident') > -1) {
		browser = 'internet-explorer';
		return { browser, device };
	}

	return { device, browser };
};
