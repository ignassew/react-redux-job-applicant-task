import { createSlice } from "@reduxjs/toolkit";

export type Card = {
  cardholder: string;
  number: string;
  expiry: Date;
  cvv: string;
};

type State = {
  cards: Card[];
};

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  } as State,
  reducers: {
    addCard: (state, { payload }: { payload: Card }) => {
      state.cards.push(payload);
    },
    removeCardByNumber: (state, { payload }: { payload: string }) => {
      state.cards = state.cards.filter((card) => card.number !== payload);
    },
  },
});

export default cardSlice;

export const { addCard } = cardSlice.actions;

export const selectCards = (state: { card: State }) => state.card.cards;
