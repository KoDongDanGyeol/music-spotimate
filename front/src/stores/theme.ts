"use client"

import { AtomEffect, atom } from "recoil"
import { isContains } from "@/libs/utils"
import LocalStorage from "@/libs/client/localstorage"

export const Theme = {
  Light: "light",
  Dark: "dark",
} as const

export type Theme = (typeof Theme)[keyof typeof Theme]

const localStorageEffect = <T extends Theme>(key: string): AtomEffect<T> => {
  return ({ setSelf, onSet }) => {
    const stored = LocalStorage.getItem(key)
    const initial = (
      stored && isContains(Object.values(Theme), stored)
        ? stored
        : typeof window !== "undefined" && window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches
          ? Theme.Dark
          : Theme.Light
    ) as T

    setSelf(initial)
    typeof window !== "undefined" && document?.documentElement?.setAttribute("data-theme", initial)

    onSet((value, _value, isReset) => {
      if (isReset) {
        LocalStorage.removeItem(key)
        typeof window !== "undefined" && document?.documentElement?.removeAttribute("data-theme")
      } else {
        LocalStorage.setItem(key, value ?? _value)
        typeof window !== "undefined" && document?.documentElement?.setAttribute("data-theme", value ?? _value)
      }
    })
  }
}

export const atomTheme = atom<Theme>({
  key: "atomTheme",
  default: Theme.Light,
  effects: [localStorageEffect<Theme>("spotimate_atomTheme")],
})
