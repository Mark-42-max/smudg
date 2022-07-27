import { createContext, useState } from "react";

//invoke and export createcontext component
export const StateContext = createContext();


export const StateProviders = (props) => {
    //setting up state
    const [isSavedSnippet, setIsSavedSnippet] = useState([]);
    const [isSavedTuts, setIsSavedTuts] = useState([]);
    const [savedList, setSavedList] = useState([]);
    const [category, setCategory] = useState('All');
    const [brand, setBrand] = useState('All');
    const [type, setType] = useState('All');

    //for video section
    const [isLiked, setIsLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);

    return (
        <StateContext.Provider value={{ 
            checkSaveSnippet: [isSavedSnippet, setIsSavedSnippet] , 
            checkSaveTuts: [isSavedTuts, setIsSavedTuts] ,
            list: [savedList, setSavedList],
            categories: [category, setCategory],
            brands: [brand, setBrand],
            types: [type, setType],
            likes: [isLiked, setIsLiked],
            comments: [isCommented, setIsCommented]
        }}>
            {props.children}
        </StateContext.Provider>
    )
}