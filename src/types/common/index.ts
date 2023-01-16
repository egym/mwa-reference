export type Option<Value = string> = {
  label: string;
  value: Value;
};

export type Pagination = {
  start: number; // The number of items to skip (=start from)
  count: number; // The number of items to include into response
};
