import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Create a zustand store.
 * @param initialState The initial state of the store
 * @param name The name of the store
 * @returns A store
 */
export function createStore<T extends object>(initialState: T, name: string) {
  return create<T>()(persist(() => initialState, { name }));
}
