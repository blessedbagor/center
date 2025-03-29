"use client"; 

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export type Store = {
    id: number;
    name: string;
    address: string;
    mobile: string;
    officeHours: string;
    businessDays: string;
    coordinates: [number, number];
  };

type MapWrapperProps = {
  center: [number, number];
  stores: Store[];
};

export default function MapWrapper({ center, stores }: MapWrapperProps) {
  return <DynamicMap center={center} stores={stores} />;
}
