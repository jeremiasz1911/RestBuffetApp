import Users from '../models/users.js';

export default {
    findOne(req,res,next){
            const id = req.params.id;
            const user = Users.findOne({where: {id}});
            if(!user) return next();
            return res.statusCode(200).send({data:user});
    },

    findAll(req,res) {},

    create(req,res) {},

    update(req,res,next) {},

    remove(req,res,next) {}
};