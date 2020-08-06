'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
  static get updatedAtColumn () {
    return 'updated_at'
  }

  users() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Article
