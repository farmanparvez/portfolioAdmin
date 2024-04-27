import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/reducers/authReducer";
import skillsReducer from "./Redux/reducers/skillsReducer";
import EducationReducer from "./Redux/reducers/EducationReducer";
import HeroReducer from "./Redux/reducers/heroReducer";
import WorkReducer from "./Redux/reducers/workReducer";
import AboutReducer from "./Redux/reducers/aboutReducer";

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        skills: skillsReducer,
        education: EducationReducer,
        hero: HeroReducer,
        work: WorkReducer,
        about: AboutReducer,
    },
})

