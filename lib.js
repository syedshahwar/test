class Test {
  #logger;

  /**
   * 
   * @param {string} id
   */
  init(id) {
    if (!this.#logger) {
      this.#logger = {id: id};
    }
  }

  async log() {

    console.log(`id -> `, this.#logger.id);
  }

}

module.exports = new Test()
