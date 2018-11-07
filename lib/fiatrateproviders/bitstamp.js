var provider = {
  name: 'Bitstamp',
  url: 'https://api.actinium.org/v1/acm/rates/',
  parseFn: function(raw) {
    var rates = _.compact(_.map(raw, function(d) {
      if (!d.code || !d.price) return null;
      return {
        code: d.code,
        value: d.price,
      };
    }));
    return rates;
  },
};

module.exports = provider;
