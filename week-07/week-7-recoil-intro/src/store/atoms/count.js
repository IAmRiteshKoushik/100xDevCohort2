import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0,
});

export const evenSelector = selector({
    key: "evenSelector",
    get: (props) => {
        // this creates a dependency on countAtom so whenever countAtom changes
        // this function is triggered
        const count = props.get(countAtom);
        return count % 2 == 0;
    }
});
