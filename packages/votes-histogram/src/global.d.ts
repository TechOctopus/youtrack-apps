export {};

declare global {
    interface YTPluginHost {
        fetchYouTrack: (path: string, options?: { query?: Record<string, string | number> }) => Promise<any>;
    }

    const YTApp: {
        register: () => Promise<YTPluginHost>;
        entity: {
            id: string;
            created: string;
        };
    };
}
