var config = module.exports = {}
config.mongo_url = "mongodb://localhost:27017/zenbrain" // change if your mongo server isn't local
config.mongo_username = null // normally not needed
config.mongo_password = null
config.twitter_key = '' // create a twitter app, generate an access token, and add it here
config.twitter_secret = ''
config.twitter_access_token = ''
config.twitter_access_token_secret = ''
config.id_bytes = 8 // for random IDs
config.save_state_interval = 10000 // save state
config.parallel_limit = 8 // run this many concurrent tasks
config.reduce_timeout = 1000
config.asset = 'BTC'
config.currency = 'USD'
config.reducer_report_interval = 30000
config.enabled_plugins = [
  'bitfinex',
  'gdax'
]
config.sim_chunk_size = '7d'
config.sim_chunks_required = 12
config.max_slug_length = 22
config.backfill_status_check = '30s'
config.backfill_status_timeout = 35000
config.reducer_limit = 5000
config.tick_sizes = ['1m'] // each tick size has its own map/reduce job
config.brain_speed = '1m' // at what speed should thinking occur
config.brain_speed_ms = 60000