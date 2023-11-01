import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  deleteFromShoppingList,
  getShoppingList,
} from "./operations";

const initialState = {
  shoppingList: [
    {
      _id: {
        $oid: "640c2dd963a319ea671e365b",
      },
      ttl: "Chicken",
      desc: 'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the "bird that gives birth every day" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.',
      t: "",
      thb: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365b.png",
    },
    {
      _id: {
        $oid: "640c2dd963a319ea671e365c",
      },
      ttl: "Salmon",
      desc: "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.",
      t: "",
      thb: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365c.png",
    },
    {
      _id: {
        $oid: "640c2dd963a319ea671e365d",
      },
      ttl: "Beef",
      desc: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.",
      t: "",
      thb: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365d.png",
    },
  ],
  isLoading: false,
};

const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data.shoppingList;
        state.isLoading = false;
      })
      .addCase(getShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteFromShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addToShoppingList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(addToShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const shoppingReducer = shoppingSlice.reducer;
