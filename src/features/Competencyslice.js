import { createSlice } from "@reduxjs/toolkit";
import { fetchCompetencies,addCompetency } from "./CompetencyActions";

const competencySlice = createSlice({
  name: "competency",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    
    // When API call starts
    builder.addCase(fetchCompetencies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // When API call succeeds
    builder.addCase(fetchCompetencies.fulfilled, (state, action) => {
      state.loading = false;

      // YOUR BACKEND RETURNS → { status, payload: [...], message }
      const payloadData = action.payload?.payload;

      // Always store array safely
      state.list = Array.isArray(payloadData) ? payloadData : [];
    });

    // When API call fails
    builder.addCase(fetchCompetencies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  


// ADD COMPETENCY
    // ------------------------------
    builder.addCase(addCompetency.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCompetency.fulfilled, (state, action) => {
      state.loading = false;
      
      // newly added competency
      const newItem = action.payload?.payload;

      if (newItem) {
        state.list.push(newItem);
      }
    });

    builder.addCase(addCompetency.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
     });
  },
});
    
  


export default competencySlice.reducer;



/* import { fetchCompetencies } from "./CompetencyActions";
import { createSlice } from "@reduxjs/toolkit";

const competencySlice = createSlice({
  name: "competency",

  initialState: {
    list: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCompetencies.fulfilled, (state, action) => {
  state.loading = false;
  state.list = action.payload.payload || []; // important

  //console.log(data);

  // convert ANY format to array
  if (!Array.isArray(data)) {
    if (Array.isArray(data?.data)) data = data.data;
    else if (Array.isArray(data?.content)) data = data.content;
    else data = [data]; // fallback for single object
  }

  state.list = data.map((c) => ({
    ...c,
    technologies: Array.isArray(c.technologies)
      ? c.technologies.map((t) => t.name)
      : []
  }));
})

      builder.addCase(fetchCompetencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

     
  


export default competencySlice.reducer; */