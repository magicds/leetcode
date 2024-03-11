/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(' ').map(it => it.length < 3 ? it.toLowerCase() : it[0].toUpperCase() + it.substr(1).toLowerCase()).join(' ');
};
// var capitalizeTitle = function(title) {
//     return title.split(' ').map(it => it.length < 3 ? it.toLowerCase() : it[0].toUpperCase() + it.substr(1).toLowerCase()).join(' ');
// };
