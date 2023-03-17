import * as React from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count > 0 ? state.count - 1 : state.count };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCount };
