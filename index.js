const Discord = require('discord.js')
const fs = require('fs')
const moment = require('moment')
const { token, id, message } = require('./config.json')
const { links, locale } = require('./util.json')
const { red, blue, green, magenta } = require('console-log-colors').color
const client = new Discord.Client({
    intents: 32767,
    partials: [
        'CHANNEL',
        'GUILD_MEMBER',
        'GUILD_SCHEDULED_EVENT',
        'MESSAGE',
        'REACTION',
        'USER'
    ]
});

moment.locale(locale)
let time = blue(`[${moment().format('LTS')}]`)

let load1;
let load2;
let load3;
let load = setInterval(() => {
    load1 = setTimeout(() => {
        console.clear()
        console.log(blue('Chargement.'))
    }, 0);
    load2 = setTimeout(() => {
        console.clear()
        console.log(blue('Chargement..'))
    }, 1000);
    load3 = setTimeout(() => {
        console.clear()
        console.log(blue('Chargement...'))
    }, 2000);
}, 3000);

client.on('ready', async () => {
    setTimeout(() => {
        clearInterval(load)
        clearTimeout(load1)
        clearTimeout(load2)
        clearTimeout(load3)
        console.clear()
        console.log(time, green(`Connecté à`), magenta('discord'), green('.'))
    }, 500);
}); 

client.on('messageCreate', async msg => {
    if(msg.author.id === id){

        let memberCount = msg.guild.memberCount;
        let sendCount = 0;

        msg.guild.members.cache.forEach(members => {
            members.send(message)
            .then(sended => {
                sendCount ++;
                console.clear()
                console.log(time, magenta(`[${sendCount}/${memberCount}]`), green('Envoyé à'), magenta(`${sended.id}`), green('.'))
            })
            .catch(err => {
                sendCount ++;
                console.clear()
                console.log(time, magenta(`[${sendCount}/${memberCount}]`), red('Une erreur est survenue :'), magenta(err), red('.'))
            })
        })

    }else return
})

client.login(token)