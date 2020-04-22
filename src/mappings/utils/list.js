function list(mapping) {
    const List = [];
    for (const [id, name] of Object.entries(mapping)) {
        List.push({id, name});
    }
    return List;
}

module.exports = list;