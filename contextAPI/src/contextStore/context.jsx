import { createContext, useReducer } from "react";
import trelloData from '../content/trello.json';

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
    const initialValue = {
        lists: trelloData.lists, 
    };

    const reducer = (state, action) => {
        console.log(state);
        console.log(action.payload);

        switch (action.type) {
            case 'ADD ITEM':
                const updatedLists = state.lists.map((list) => {
                    if (list.name === action.payload.listname) {
                        return {
                            ...list,
                            cards: [...list.cards, { id: action.payload.data.id, title: action.payload.data.title }]
                        };
                    }
                    return list;
                });
                return {
                    ...state,
                    lists: updatedLists
                };

            case 'MOVE_TARGET':
                const { sourceList, targetList, item } = action.payload;
                const updatedSourceList = state.lists.map((list) => {
                    if (list.name === sourceList) {
                        return {
                            ...list,
                            cards: list.cards.filter((card) => card.id !== item.id)
                        };
                    }
                    return list;
                });

                const updatedTargetList = updatedSourceList.map((list) => {
                    if (list.name === targetList) {
                        return {
                            ...list,
                            cards: [...list.cards, { title: item.title, id: item.id }]
                        };
                    }
                    return list;
                });

                return {
                    ...state,
                    lists: updatedTargetList
                };

            case 'EDIT_CARD':
                const { source, id, newTitle } = action.payload;
                const editedList = state.lists.map((list) => {
                    if (list.name === source) {
                        return {
                            ...list,
                            cards: list.cards.map((card) => 
                                card.id === id ? { ...card, title: newTitle } : card
                            )
                        };
                    }
                    return list;
                });
                return {
                    ...state,
                    lists: editedList
                };

            case 'DELETE_TARGET':
                const newCardList = state.lists.map((list) => {
                    if (list.name === action.payload.sourceList) {
                        return {
                            ...list,
                            cards: list.cards.filter((item) => item.id !== action.payload.id)
                        };
                    }
                    return list;
                });
                return {
                    ...state,
                    lists: newCardList
                };

            case 'ADD_NEW_CARD':
                return {
                    ...state,
                    lists: [...state.lists, { name: action.payload.cardTitle, cards: [] }]
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
