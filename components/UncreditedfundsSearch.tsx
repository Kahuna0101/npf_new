"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUncreditedFunds } from "@/lib/action";
import ClaimForm from "./ClaimForm";

interface SearchResult {
  IPPISNO: string | null;
  RSAPIN: string | null;
  NAME: string | null;
  EE: number;
  ER: number;
  EMPLOYERNAME: string | null;
}

const UncreditedfundsSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [selected, setSelected] = useState<SearchResult | null>(null);

  const resetSearch = () => {
  setSearch("");
  setResult(null);
  setSelected(null);
  setNotFound(false);
};

  const handleSearch = async () => {
    if (!search.trim()) return;

    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      const data = await getUncreditedFunds(search);

      if (!data?.IPPISNO && !data?.RSAPIN) {
        setNotFound(true);
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error(error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex gap-3">
        <Input
          className="form-input" 
          placeholder="Enter IPPIS No or RSA PIN"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <Button onClick={handleSearch} disabled={loading} className="h-12 cursor-pointer bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {notFound && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
          No uncredited funds record was found.
        </div>
      )}

      {result && (
        <div className="rounded-lg border p-5 space-y-2">
          <p>
            <strong>Employee Name:</strong> {result.NAME}
          </p>

          <p>
            <strong>Employee Code:</strong> {result.IPPISNO}
          </p>


          <p>
            <strong>Employer Name:</strong> {result.EMPLOYERNAME}
          </p>


          <p>
            <strong>RSA PIN:</strong> {result.RSAPIN}
          </p>


          <Button onClick={() => setSelected(result)} className="mt-3 w-full cursor-pointer bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">
            Claim
          </Button>
        </div>
      )}

      {selected && (
        <ClaimForm
          person={selected}
          onClose={() => setSelected(null)}
          onSuccess={resetSearch}
        />
      )}
    </div>
  );
};

export default UncreditedfundsSearch;