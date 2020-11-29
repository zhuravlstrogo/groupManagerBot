export const acceptRequest = (ctx, next) => {
    console.log({ ctx })
    const { message } = ctx.update
    console.log('Message:', { ...message })
    const { from, chat, document, forward_from } = message
    console.log('Destructurized:', {
        from, chat, document, forward_from
    })
    return next()
}