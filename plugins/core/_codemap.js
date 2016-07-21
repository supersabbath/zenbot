module.exports = {
  _ns: 'zenbot',
  _maps: [
    require('./backfill/_codemap'),
    require('./brain/_codemap'),
    //require('./export_command/_codemap'),
    //require('./forget_command/_codemap'),
    require('./db/_codemap'),
    require('./launcher/_codemap'),
    //require('./learn_command/_codemap'),
    require('./logger/_codemap'),
    require('./record/_codemap'),
    require('./reduce/_codemap'),
    require('./run/_codemap'),
    //require('./sim_command/_codemap'),
    //require('./status_command/_codemap'),
    //require('./tick_reporter/_codemap'),
    require('./trade_reducer/_codemap'),
    //require('./twitter_client/_codemap')
  ]
}