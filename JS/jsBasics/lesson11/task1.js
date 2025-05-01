function logAfterDelay(message, delay) {
	setTimeout(() => {
		console.log(message);
	}, delay);
}

logAfterDelay('Collect moments not things', 5000);
