const subscriberModel = require("../../models/subscriber");
class SubscriberService {
  constructor(db) {
    this.db = db;
  }
  async save(subscriber) {
    const subscriberRecord = await this.db.save(subscriberModel, subscriber);
    return { subscriber: subscriberRecord };
  }
}

module.exports = SubscriberService;
