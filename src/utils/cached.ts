export function weakCached<K extends object, V>(fn: (key: K) => V) {
	const cache = new WeakMap<K, V>()
	return function (key: K) {
		if (!cache.has(key)) {
			cache.set(key, fn(key))
		}
		return cache.get(key)!
	}
}
