export interface IAction<TPayload = any, TError = Error> {
    type: string;
    payload?: TPayload;
    error?: TError;
}
