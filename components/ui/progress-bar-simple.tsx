"use client";

import { cn } from "@/lib/utils/utils";
import React from "react";

interface ProgressBarSimpleProps {
  current: number;
  max: number;
  className?: string;
  showText?: boolean;
}

export function ProgressBarSimple({
  current,
  max,
  className,
  showText = true,
}: ProgressBarSimpleProps) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      {showText && (
        <div className="flex text-sm mb-2">
          <span>次のレベルまで</span>
          <span className="font-bold">
            {Math.round(current).toLocaleString()}
            ポイント🔥
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
        <div
          className="bg-gradient-to-r from-[#30baa7] to-[#47c991] h-3 rounded-full shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
