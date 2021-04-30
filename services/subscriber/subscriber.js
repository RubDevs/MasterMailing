class SubscriberService {
  constructor(db) {
    this.collection = "subscribers";
    this.db = db;
  }
  async save(subscriber) {
    const subscriberRecord = await this.db.create(this.collection, subscriber);
    return { subscriber: subscriberRecord };
  }
}

module.exports = SubscriberService;
