import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COMPETENCY_API } from "../constant/api";


export const fetchCompetencies = createAsyncThunk(
  "competency/fetchAll",
  async () => {
    const res = await axios.get(COMPETENCY_API.GET_ALL);
    return res.data;
  }
);


export const addCompetency = createAsyncThunk(
  "competency/createCompetency",
  async (competencyData) => {
    const res = await axios.post(COMPETENCY_API.CREATE_COMPETENCY,competencyData);
    return res.data;
  }
);
//update
//delete
//findbYid
//findnyname
//findbymanagername

