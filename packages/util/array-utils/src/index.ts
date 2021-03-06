export const makeArrayWithoutDuplicates = <T>(array: T[]): T[] => {
    const arrayWithoutDuplicates: Array<T> = [];
    array.forEach((value) => {
        if (!arrayWithoutDuplicates.includes(value)) {
            arrayWithoutDuplicates.push(value);
        }
    });
    return arrayWithoutDuplicates;
};

export const getArrayDifference = (baseArray: any[], otherArray: any[]) => {
    return baseArray.filter((value) => otherArray.includes(value) === false);
};
