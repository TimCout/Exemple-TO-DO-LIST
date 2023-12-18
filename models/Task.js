import Model from './Model.js';

export default class users extends Model {

  static table = "ToDo.tasks";
  static primary = ["idtasks"];
}
