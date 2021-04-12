import express from 'express';
import Sequelize from 'sequelize';
import { notFound, catchErrors } from './middlewares/errors.js';
import configDev from './config/config.js';
import bodyParser from 'body-parser';
import users from './routes/index.js';

const app = express();
const sequelize = new Sequelize(configDev);

app.use(express.json());

//body-forms-provider
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes config
//app.use('/api/users', users());

//errors handling
app.use(notFound);
app.use(catchErrors);

app.use('/', users());
// app.post('/users', async(req,res) => {
//     const {phone, picture, email, password, token, RoleId} = req.body;
//     try{
//         const user = await Users.create({ phone, picture, email, password, token, RoleId});
//         return res.json(user) ;
//     } catch(err){
//         console.log(err);
//         return res.status(500).json(err);
        
//     }
// })

// app.get('/users', async (req,res) => {
//     try{
//         const users = await Users.findAll();

//         return res.json(users);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({error:'Something went wrong'});
//     }
// })

// app.get('/users/:id', async (req,res) => {
//     const id = req.params.id ;
//     try{
//         const users = await Users.findOne({
//             where: {id}
//         });

//         return res.json(users);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({error:'Something went wrong'});
//     }
// })

app.listen({port:5000}, async () => {
    console.log('Serwer up on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database synced!');
});
