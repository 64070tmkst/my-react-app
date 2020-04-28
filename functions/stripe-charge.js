const stripe= require('stripe')('sk_test_I4kjAHdW6yHj3CEf5y03Jfgs00dNiOFj5G')

exports.handler= async function(event){
    const{
        tokenId,
        email,
        name,
        description,
        ammount
    }= JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}

