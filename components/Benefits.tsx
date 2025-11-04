"use client";
import { useState } from "react";
import { BenefitsTab } from "./BenefitsTab";
import { IngedrientsTab } from "./IngedrientsTab";
import { Section } from "./Section";
import { UsageTab } from "./UsageTab";

const tabs = [
  {
    title: "Avantages",
    value: "benefits",
  },
  {
    title: "Ingrédients",
    value: "ingredients",
  },
  {
    title: "Utilisation",
    value: "usage",
  },
];

export const Benefits = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  return (
    <Section id="benefits">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex border-b border-heading/20">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`max-sm:text-xs flex-1 py-4 px-6 font-semibold transition cursor-pointer ${
                activeTab === tab.value
                  ? "bg-primary text-white"
                  : "bg-teal-50/15 text-heading/70 hover:bg-teal-50"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-8 md:p-12">
          {activeTab === "benefits" && <BenefitsTab />}
          {activeTab === "ingredients" && <IngedrientsTab />}
          {activeTab == "usage" && <UsageTab />}
        </div>
      </div>
    </Section>
  );
};
