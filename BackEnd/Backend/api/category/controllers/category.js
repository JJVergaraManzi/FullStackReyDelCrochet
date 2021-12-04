'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const findByName = async ( pNombre)=> {
    const {name} = pNombre.params;
    const resultado = await strapi.query ('category').find({'name':name});
    return resultado;

}
module.exports = {
    findByName,
    
};
