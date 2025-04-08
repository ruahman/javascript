let context = [];

function cleanup(observer) {
	for (const dep of observer.dependencies) {
		dep.delete(observer);
	}
	observer.dependencies.clear();
}

function subscribe(observer, subscriptions) {
	subscriptions.add(observer);
	observer.dependencies.add(subscriptions);
}

export function createSignal(value) {
	const subscriptions = new Set();

	const read = () => {
		// detect if there is an observer in the context
		const observer = context[context.length - 1];
		// if there is someone observing then subscribe it to the signal
		if (observer) subscribe(observer, subscriptions);
		return value;
	};

	const write = (newValue) => {
		// change clojure value for newValue
		value = newValue;

		// if there are any observers subscribed for this signal then run them
		for (const observer of [...subscriptions]) {
			observer.execute();
		}
	};

	return [read, write];
}

export function createEffect(fn) {
	const effect = {
		execute() {
			cleanup(effect);
			// push this effect to the current context
			context.push(effect);
			fn();
			context.pop();
		},
		dependencies: new Set(),
	};
	effect.execute();
}

export function createMemo(fn) {
	const [signal, setSignal] = createSignal();
	createEffect(() => setSignal(fn()));
	return signal;
}

export function untrack(fn) {
	const prevContext = context;
	context = [];
	const res = fn();
	context = prevContext;
	return res;
}
