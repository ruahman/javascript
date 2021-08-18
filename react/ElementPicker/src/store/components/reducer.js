//import { coddjkmbineReducers } from "redux";
import * as actions from "./actions";

const initialState = {
  currentlyEdited: null,
  items: [],
};

const componentsReducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case actions.ADD_COMPONENT:
      // let { id, layout } = action;
      return {
        ...state,
        currentlyEdited: {
          id: action.id,
          layout: action.layout,
          values: {},
        },
        items: [
          ...state.items,
          { id: action.id, layout: action.layout, values: {} },
        ],
      };
    case actions.UPDATE_COMPONENT:
      let items = state.items.map(item => {
        if (item.id === action.id) {
          item.layout = action.data.layout;
          item.values = action.data.values;
        }
        return item;
      });
      return {
        ...state,
        items,
      };
    case actions.REMOVE_COMPONENT:
      let filteredItems = state.items.filter(item => {
        return item.id !== action.id;
      });
      return {
        ...state,
        items: filteredItems,
      };
    case actions.SET_EDITED_COMPONENT:
      console.log(action.type, action.component);

      let item = state.items.find(item => {
        return item.id === action.component.id;
      });
      console.log("------------------debug ----------------");
      console.log(item);
      return {
        ...state,
        currentlyEdited: {
          id: item.id,
          layout: item.layout,
          values: item.values,
        },
      };
    default:
      return state;
  }
};

export { initialState, componentsReducer };
