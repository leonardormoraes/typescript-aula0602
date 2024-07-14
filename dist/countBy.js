export default function countBy(arr) {
    return arr.reduce((acc, item) => {
        acc[item] ? (acc[item] += 1) : (acc[item] = 1);
        return acc;
    }, {});
}
//# sourceMappingURL=countBy.js.map