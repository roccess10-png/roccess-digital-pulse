import { useState, useEffect } from 'react';

export function useDarkMode(){
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        const prefers = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        setIsDark(stored ? stored === 'dark' : !!prefers);
    }, []);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.classList.toggle('dark', isDark);
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
    },[isDark])

    return [isDark, setIsDark];
}