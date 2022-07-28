import { createContext, useState } from "react";

//invoke and export createcontext component
export const StateContext = createContext();


export const StateProviders = (props) => {
    const [dummy, setDummy] = useState([
        {
          id: 11,
          title: "How to apply this face cream the right way",
          feat: "Nykaa",
          vidUri: "video link to be stored here",
          duration: 40
        },
        {
          id: 12,
          title: "How to apply this face cream the right way",
          feat: "Nykaa",
          vidUri: "video link to be stored here",
          duration: 40
        },
        {
          id: 13,
          title: "How to apply this face cream the right way",
          feat: "Nykaa",
          vidUri: "video link to be stored here",
          duration: 40
        },
        {
          id: 14,
          title: "How to apply this face cream the right way",
          feat: "Nykaa",
          vidUri: "video link to be stored here",
          duration: 40
        }
      ])
    const [tutorial, setTutorial] = useState([
        {
          id: 21,
          title: "How to apply this face cream the right way",
          influencer: "Deepika Padukone",
          designation: "Fashion Stylist",
          price: 499,
          vidUri: "video link to be stored here",
          duration: 40
        },
    
        {
          id: 22,
          title: "How to apply this face cream the right way",
          influencer: "Smudg",
          designation: "Recommended for you",
          price: 0,
          vidUri: "video link to be stored here",
          duration: 40
        },
    
        {
          id: 23,
          title: "How to apply this face cream the right way",
          influencer: "Deepika Padukone",
          designation: "Fashion Stylist",
          price: 499,
          vidUri: "video link to be stored here",
          duration: 40
        },
    
        {
          id: 24,
          title: "How to apply this face cream the right way",
          influencer: "Deepika Padukone",
          designation: "Fashion Stylist",
          price: 666,
          vidUri: "video link to be stored here",
          duration: 40
        }
      ]);
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
    const [likedCount, setLikedCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

    return (
        <StateContext.Provider value={{ 
            dummyData: [dummy, setDummy],
            tutorialData: [tutorial, setTutorial],
            checkSaveSnippet: [isSavedSnippet, setIsSavedSnippet] , 
            checkSaveTuts: [isSavedTuts, setIsSavedTuts] ,
            list: [savedList, setSavedList],
            categories: [category, setCategory],
            brands: [brand, setBrand],
            types: [type, setType],
            likes: [isLiked, setIsLiked],
            comments: [isCommented, setIsCommented],
            likesCount: [likedCount, setLikedCount],
            commentsCount: [commentCount, setCommentCount]
        }}>
            {props.children}
        </StateContext.Provider>
    )
}