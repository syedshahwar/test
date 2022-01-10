class Test {
  #logger;

  /**
   * 
   * @param {number} id
   * @param {name} name
   */
  init(id, name) {
    if (!this.#logger) {
      this.#logger = {id: id, name: name};
    }
  }

  async logId() {

    console.log(`id -> `, this.#logger.id);
  }

  async logName() {

    console.log(`id -> `, this.#logger.name);
  }

}

module.exports = new Test()
