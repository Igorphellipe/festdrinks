const selectedIds = new Set();
const subscribers = new Set();

const notify = () => subscribers.forEach((callback) => callback(getSelection()));

export const getSelection = () => [...selectedIds];
export const isSelected = (id) => selectedIds.has(id);
export const toggleSelection = (id) => { selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id); notify(); return selectedIds.has(id); };
export const removeSelection = (id) => { selectedIds.delete(id); notify(); };
export const subscribeSelection = (callback) => { subscribers.add(callback); callback(getSelection()); return () => subscribers.delete(callback); };
