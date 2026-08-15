"use server"
import { NextRequest, NextResponse } from "next/server";

export const getDailyUnitPrice = async () => {
try {
    const res = await fetch(
      "https://online.npfpensions.com.ng/NPFWebAPI/api/AccountsTrans/GetPriceSummary",
      { next: {  revalidate: 60 * 60 * 24 } }
    )
    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) return null

    const today = data[0]
    const yesterday = data[1] || null

    return { today, yesterday }
  } catch (error) {
    console.error("Error fetching unit prices:", error)
    return null
  }
};


export const getUncreditedFunds = async (search: string) => {
  if (!search.trim()) return null;

  try {
    const response = await fetch(
      `https://online.npfpensions.com.ng/NPFWebAPI/api/S_WEBUSER/GetUncreditedInfo/${encodeURIComponent(search)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};