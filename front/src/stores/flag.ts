"use client"

import { AtomEffect, atom } from "recoil"
import LocalStorage from "@/libs/client/localstorage"

export type Flag = boolean

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const stored = LocalStorage.getItem(key)
    if (stored && Boolean(stored)) {
      setSelf(JSON.parse(stored))
    }
    onSet((value, _value, isReset) => {
      if (isReset) return LocalStorage.removeItem(key)
      LocalStorage.setItem(key, JSON.stringify(value ?? _value))
    })
  }

export const atomFlag = atom<Flag>({
  key: "atomFlag",
  default: false,
  effects: [localStorageEffect<Flag>("spotimate_atomFlag")],
})
