type Merge<T1, T2> = Omit<T1, keyof T2> & T2;
type Diff<T, U> = Omit<T, keyof U & keyof T>;
type Exact<T> = Exclude<T, null | undefined>;

export type { Merge, Diff, Exact };
