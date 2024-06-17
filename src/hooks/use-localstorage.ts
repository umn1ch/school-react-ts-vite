import { useState } from 'react';

type SetValue<T> = (value: T) => void;

const useLocalStorage = <T,>(key: string, defaultValue: T): [T, SetValue<T>] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value) as T;
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            console.error(error);
            return defaultValue;
        }
    });

    const setValue: SetValue<T> = (newValue: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error(error);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
