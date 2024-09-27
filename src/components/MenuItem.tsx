import type { MenuItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"


type MenuItemProps = {
  item: MenuItem
  dispatch: Dispatch<OrderActions>

}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={() => dispatch({type: 'add-item', payLoad: {item}})}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>

    </button>

  )
}
