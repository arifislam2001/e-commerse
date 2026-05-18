import React from "react";
import Button from "./Button";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export function Pagination({ handlechange, pageNum, totalPage }) {
  const next = () => {
    if (pageNum === totalPage) return;
    handlechange(pageNum + 1);
  };

  const prev = () => {
    if (pageNum === 1) return;
    handlechange(pageNum - 1);
  };

  // Desktop: smart ellipsis
  const getDesktopPages = () => {
    if (!totalPage || totalPage <= 7) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }
    const pages = [];
    pages.push(1);
    if (pageNum > 4) pages.push("...");
    for (let d = -2; d <= 2; d++) {
      const p = pageNum + d;
      if (p >= 1 && p <= totalPage) pages.push(p);
    }
    if (pageNum < totalPage - 3) pages.push("...");
    pages.push(totalPage);
    const result = [];
    for (let i = 0; i < pages.length; i++) {
      if (i === 0 || pages[i] !== pages[i - 1]) result.push(pages[i]);
    }
    return result;
  };

  // Mobile: current ± 1 only
  const getMobilePages = () => {
    if (!totalPage || totalPage <= 5) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }
    const pages = [];
    pages.push(1);
    if (pageNum > 3) pages.push("...");
    if (pageNum > 2) pages.push(pageNum - 1);
    if (pageNum !== 1 && pageNum !== totalPage) pages.push(pageNum);
    if (pageNum < totalPage - 1) pages.push(pageNum + 1);
    if (pageNum < totalPage - 2) pages.push("...");
    pages.push(totalPage);
    const result = [];
    for (let i = 0; i < pages.length; i++) {
      if (i === 0 || pages[i] !== pages[i - 1]) result.push(pages[i]);
    }
    return result;
  };

  const desktopPages = getDesktopPages();
  const mobilePages = getMobilePages();

  return (
    <div className="flex items-center gap-2 sm:gap-4 mt-10 justify-center">

      {/* Previous: icon only on mobile */}
      <Button
        className="flex items-center gap-1 sm:gap-2 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
        onClick={prev}
        disabled={pageNum === 1}
      >
        <BiArrowFromRight strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="hidden sm:inline">Previous</span>
      </Button>

      {/* Mobile pages */}
      <div className="flex items-center gap-1 sm:hidden">
        {mobilePages.map((p, i) =>
          p === "..." ? (
            <span key={`m-ellipsis-${i}`} className="text-xs text-gray-400 px-0.5">…</span>
          ) : (
            <Button
              key={`m-${p}`}
              variant={pageNum === p ? "primary" : "secondary"}
              className="rounded-full min-w-[28px] h-7 text-xs px-1.5"
              onClick={() => handlechange(p)}
            >
              {p}
            </Button>
          )
        )}
      </div>

      {/* Desktop pages */}
      <div className="hidden sm:flex items-center gap-2">
        {desktopPages.map((p, i) =>
          p === "..." ? (
            <span key={`d-ellipsis-${i}`} className="text-sm text-gray-400 px-1">…</span>
          ) : (
            <Button
              key={`d-${p}`}
              variant={pageNum === p ? "primary" : "secondary"}
              className="rounded-full"
              onClick={() => handlechange(p)}
            >
              {p}
            </Button>
          )
        )}
      </div>

      {/* Next: icon only on mobile */}
      <Button
        className="flex items-center gap-1 sm:gap-2 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
        onClick={next}
        disabled={pageNum === totalPage}
      >
        <span className="hidden sm:inline">Next</span>
        <BiArrowFromLeft strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </Button>
    </div>
  );
}