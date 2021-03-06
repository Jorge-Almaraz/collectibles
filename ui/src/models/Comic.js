
import Field from "../components/CRUD/Field";

export default class Comic {
  static getFields () {
    return [
      new Field({
        name: 'id',
        type: 'number',
        insertDisabled: true,
        editDisabled: true
      }),
      new Field({
        name: 'brand'
      }),
      new Field({
        name: 'title'
      })
    ]
  }
}
