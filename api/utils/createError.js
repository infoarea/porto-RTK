
//Create custom Error
export const createError = (name, msg, st) => {
    const err = new Error();
    err.name = name;
    err.message = msg;
    err.status = st;
    err.stack = err.stack;

    return err;
}