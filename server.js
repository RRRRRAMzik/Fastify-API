const fastify = require ('fastify')({logger: true})
const PORT = 3000

fastify.get('/items',(req, reply) => {
    reply.send({test: 'hello'})
})

const start = async () => {
    try {
        await fastify.listen(PORT)
    }catch (error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()