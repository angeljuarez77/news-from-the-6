const { Post, User } = require('./models');
const bcrypt = require('bcrypt-nodejs');

const dummyPosts = async () => {
        await Post.destroy({where:{}});
        await Post.bulkCreate([
            {
                title: 'first article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
            },
            {
                title: 'second article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'third article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'fourth article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'fifth article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'sixth article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: 'seventh article',
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]);
        process.exit();
};

const dummyUsers =  () => {
        User.destroy({where: {}}).then(() => {}).catch(e => console.log(e));
        User.bulkCreate([
            {
                user_name: 'client',
                access_level: 1,
                email: 'client',
                password: '$2a$10$0rltmRga9k5voAs93nf54.CSvjnronuVX2CVtnkHkgVnVVgzjsLFW'
            },
            {
                user_name: 'secondclient',
                access_level: 1,
                email: 'secondclient',
                password: '$2a$10$CV84hcDs8ROosJlIrO00iO3Ptp34RsbIH.b7RCLLR/9GLB88our.O'
            },
            {
                user_name: 'jtest',
                access_level: 2,
                email: 'jtest',
                password: '$2a$10$HQdrvn99nGuFntfE.CGBtubFdTUAV/o4b8A7.O62LP/DYNpxZBRzC'
            },
            {
                user_name: 'secondjtest',
                access_level: 2,
                email: 'secondjtest',
                password: '$2a$10$hZ8MiuM5atGQnSl6w6iiSOHY5NuOUh/MfszI5jpQMYJqqOjrPinkG'
            },
            {
                user_name: 'admintest',
                access_level: 3,
                email: 'admintest',
                password: '$2a$10$QapHmCSryMsS3syaqdqdfu/dFFimh/f8yT7YILOjHv9PHopTcv0nq' 
            }
        ]).then(() => {}).catch(e => console.log(e));
};
async function associatePosts(){
    try {
        const firstj = await User.findByPk(3)
        const secondj = await User.findByPk(4);
        const posts = await Post.findAll();
        console.log('====================================');
        console.log(posts);
        console.log('====================================');
    } catch(e){
        console.log(e);
    }
}
const run = async () => {
    try{
        await dummyPosts();
    } catch{e => console.log(e)}
};
dummyUsers();
run();
associatePosts();