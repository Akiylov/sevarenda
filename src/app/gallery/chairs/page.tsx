import ChairsPage from "@/src/components/pages/gallery/chairs-page/ChairsPage";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <ChairsPage />
      </Suspense>
    </div>
  );
};

export default page;
