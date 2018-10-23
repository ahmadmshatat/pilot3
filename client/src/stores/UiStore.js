import { observable } from "mobx";


class UiStore {

  @observable list = [];

  @observable todos = "";
  @observable todosDesc = "";

}

export default new UiStore();
