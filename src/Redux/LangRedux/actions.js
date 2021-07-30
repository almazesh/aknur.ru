import { CHANGE_LANG } from "./types"

export const ruLangAction = data => {
    return {
        type: `${CHANGE_LANG}_RU`,
        payload: data
    }
}

export const enLangAction = data => {
    return {
        type: `${CHANGE_LANG}_EN`,
        payload: data
    }
}

export const tmLangAction = data => {
    return {
        type: `${CHANGE_LANG}_TM`,
        payload: data
    }
}