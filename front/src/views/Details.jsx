import React from "react";
import SearchInput from "../components/SearchInput";
import { useParams } from "react-router-dom";
import { CityCard } from "../components/CityCard";

function Details() {
    const { city } = useParams();

    return (
        <div className="container mx-auto px-4 mt-10">
            <div className="mb-8 w-full flex justify-center">
                <SearchInput />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
            </div>
        </div>
    );
}

export default Details;
