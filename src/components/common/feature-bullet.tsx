import React from "react";

interface FeatureBulletProps {
  idx: number;
  feature: string;
}

const FeatureBullet: React.FC<FeatureBulletProps> = ({ idx, feature }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <div className="w-8 h-5 flex justify-center items-center rounded-full bg-orange-300">
        <p className="text-white text-xs">{idx}</p>
      </div>
      <p>{feature}</p>
    </div>
  );
};

export default FeatureBullet;
