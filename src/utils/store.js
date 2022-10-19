// import { hookstate, useHookstate } from '@hookstate/core';
// // Favorite Store
// const favoriveList = hookstate([]);
// const wrapFavoriteState = (s) => ({
// 	get: () => s.value,
// 	update: (newList) => s.set(() => newList),
// });

// //SearchResult Store
// const searchResult = hookstate([]);
// const wrapSearchResultState = (s) => ({
// 	get: () => s.value,
// 	update: (newList) => s.set(() => newList),
// });

// export const getSearchResultState = () => wrapSearchResultState(searchResult);
// export const accessSearchResultState = () =>
// 	wrapSearchResultState(useHookstate(searchResult));
// export const getFavoriteState = () => wrapFavoriteState(favoriveList);
// export const accessFavoriteState = () =>
// 	wrapFavoriteState(useHookstate(favoriveList));
