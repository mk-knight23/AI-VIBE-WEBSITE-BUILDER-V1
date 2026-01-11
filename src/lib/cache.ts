
/**
 * Edge-compatible caching layer for generated fragments
 * Uses an in-memory Map for simple, fast caching in Edge runtimes.
 * For production, consider using Upstash Redis or a similar provider.
 */

const cache = new Map<string, { data: any; expires: number }>();

export const edgeCache = {
    get: (key: string) => {
        const item = cache.get(key);
        if (!item) return null;

        if (Date.now() > item.expires) {
            cache.delete(key);
            return null;
        }

        return item.data;
    },

    set: (key: string, data: any, ttlSeconds: number = 3600) => {
        cache.set(key, {
            data,
            expires: Date.now() + ttlSeconds * 1000,
        });
    },

    delete: (key: string) => {
        cache.delete(key);
    },

    clear: () => {
        cache.clear();
    },
};
