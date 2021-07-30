import { enLangData, ruLangData, tmLangData } from "../../utils/langData";
import { CHANGE_LANG } from "./types";

const initStore = {
    selectedLang: ruLangData,
    selectedLangSlug: 'RU'
}

export default function LangsReducer(state = initStore, { type, payload }){
    switch(type){
        case `${CHANGE_LANG}_RU`: {
            return {
                ...state,
                selectedLang: ruLangData,
                selectedLangSlug: 'RU'
            }
        }
        case `${CHANGE_LANG}_EN`: {
            return {
                ...state,
                selectedLang: enLangData,
                selectedLangSlug: 'EN'
            }
        }
        case `${CHANGE_LANG}_TM`: {
            return {
                ...state,
                selectedLang: tmLangData,
                selectedLangSlug: 'TM'
            }
        }
        default: 
            return state;
    }
}