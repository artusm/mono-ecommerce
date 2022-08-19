import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import {addCart, AddCartPayload, getInCartAmount} from "../store/slices/cart-items";
import {useCallback} from "react";

export const useCartItem = (slug: string) => {
  const dispatch = useDispatch();
  const inCartAmount = useSelector((state: AppState) => getInCartAmount(state.cardItems, slug));

  const add = useCallback(({amount}: AddCartPayload) => {
    dispatch(addCart({ slug, amount }));
  }, [slug]);

  return {
    inCartAmount,
    addCart: add,
  }
};
