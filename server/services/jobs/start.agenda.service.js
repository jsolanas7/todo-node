const Agenda = require('agenda');
const { expiredHandle } = require('../task/updateExpired.task.service');


const startAgenda = (urlDB) => {
    let agenda = new Agenda({db: {address: urlDB}});
    agenda.define('expiredTaskJob', async function(job) {
        await expiredHandle();
    });
    
      agenda.on('ready', function() {
        // agenda.every('10 seconds', 'expiredTaskJob');
        agenda.schedule('every day at 00:00', 'expiredTaskJob');
        agenda.start();
      });
}

module.exports = {
  startAgenda
}