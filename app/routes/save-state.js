const { User } = require('../schemas');

module.exports = async ctx => {
    const body = ctx.request.body;

    if (body) {
        console.log(body);
        ctx.status = 200;
    }
    else
        ctx.status = 400;
//    const user = new User({
//        name: 'Dmitrii',
//    });
//
//    await user.save();
};

