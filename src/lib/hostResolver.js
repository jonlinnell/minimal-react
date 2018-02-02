if (!process.env.HOST) { throw Error('HOST is not defined.') }

const hostResolver = () => `http://${process.env.HOST}:${process.env.PORT}`

export default hostResolver
