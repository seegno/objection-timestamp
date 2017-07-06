'use strict';

/**
 * Export `timestamp`
 */

module.exports = function(Model) {
  return class TimestampPlugin extends Model {

    /**
     * Before insert.
     */

    $beforeInsert(context) {
      const parent = super.$beforeInsert(context);

      return Promise.resolve(parent).then(() => {
        this.updatedAt = new Date();
        this.createdAt = new Date();
      });
    }

    /**
     * Before Update.
     */

    $beforeUpdate(context) {
      const parent = super.$beforeInsert(context);

      return Promise.resolve(parent).then(() => {
        this.updatedAt = new Date();
      });
    }
  };
};
