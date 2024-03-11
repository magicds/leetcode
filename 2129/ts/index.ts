function capitalizeTitle(title: string): string {
    return title.split(' ').map(it => it.length < 3 ? it.toLowerCase() : it[0].toUpperCase() + it.substr(1).toLowerCase()).join(' ');
};
