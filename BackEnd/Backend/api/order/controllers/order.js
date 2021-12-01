'use strict';
const { parseMultipartData, sanitizeEntity} = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const stripe = require('stripe')(process.env.STRIPE_KEY)
const MY_DOMAIN = 'http://localhost:8080/carritojaja'
module.exports = {
    async create(ctx){
        const{cartDetail, cartTotal} = ctx.request.body
        const line_items=cartDetail.map((cartItem) =>{
            const item ={}
            item.price_data ={
                currency:'clp',
                product_data:{
                    name:cartItem.name
                },
                unit_amount :cartItem.price
            },
            item.qty = cartItem.qty
            return item
        })
        await strapi.services.order.create({Item: line_items})
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${MY_DOMAIN}?success=true`,
            cancel_url: `${MY_DOMAIN}?canceled=true`
        })
        return { id:session.id}
    }
};
