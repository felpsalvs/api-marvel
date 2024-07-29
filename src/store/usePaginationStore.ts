import { mountStoreDevtool } from 'simple-zustand-devtools';
import { createStore } from './createStore';

export interface PaginationState {
  page: number;
  offset: number;
}

const initialState: PaginationState = { page: 1, offset: 1 };

export const usePaginationStore = createStore<PaginationState>(
  initialState,
  'paginationStore'
);

export function setPage(page: number) {
  usePaginationStore.setState({ page });
}

export function setOffset(offset: number) {
  usePaginationStore.setState({ offset });
}

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('paginationStore', usePaginationStore);
}
