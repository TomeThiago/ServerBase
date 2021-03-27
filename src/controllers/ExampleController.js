const toDoList = [];

module.exports = {
  async index(req, res) {
    if (!req.params.id) {
      return res.status(200).json(toDoList);
    } else {
      const index = toDoList.findIndex(toDo => toDo.id == req.params.id);

      return res.status(200).json(toDoList[index]);
    }
  },

  async store(req, res) {
    const { description } = req.body;

    toDoList.push({
      id: toDoList.length + 1,
      description,
    });

    return res.status(200).json({ message: 'to do registered successfully!' });
  },

  async update(req, res) {
    const { id } = req.params;
    const { description } = req.body;

    const index = toDoList.findIndex(transaction => transaction.id == id);

    toDoList[index].description = description;

    return res.status(200).json({ message: 'to do updated successfully!' });
  },

  async delete(req, res) {
    const { id } = req.params;

    const index = toDoList.findIndex(transaction => transaction.id == id);

    toDoList.splice(index, 1);

    return res.status(200).json({ message: 'to do deleted successfully!' });
  }
}