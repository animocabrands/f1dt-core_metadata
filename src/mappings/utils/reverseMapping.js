// const reverseMapping = o => Object.keys(o).reduce((r, k) =>
//     Object.assign(r, { [o[k]]: (r[o[k]] || []).concat(k) }), {});

function reverseNumberMapping(obj) {
    var ret = {};
    for (var key in obj) {
        ret[obj[key]] = key;
    }
    return ret;
}

module.exports = reverseNumberMapping;