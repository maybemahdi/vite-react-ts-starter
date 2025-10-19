export const isNonEmptyArray = (value) => {
    if (!Array.isArray(value)) {
        // toast.error('The "map" value is not an array');
        return false;
    }
    else {
        return value.length > 0;
    }
};
