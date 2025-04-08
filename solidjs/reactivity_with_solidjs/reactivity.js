const context = [];

export function createSignal(value) {
	const subscriptions = new Set();

	const read = () => {
		// detect if there is an observer for this context
		const observer = context[context.length - 1];
		// add observer to subscriptions for this signal
		if (observer) subscriptions.add(observer);
		return value;
	};
	const write = (newValue) => {
		value = newValue;
		// if there are any observers subscribed for this signal then run them
		for (const observer of subscriptions) {
			observer.execute();
		}
	};

	return [read, write];
}

export function createEffect(fn) {
	const effect = {
		execute() {
			// there is a context setup before running the fn
			context.push(effect);
			fn();
			context.pop();
		},
	};
	effect.execute();
}
