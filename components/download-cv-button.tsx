"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DownloadCVButton() {
  const handleDownload = () => {
    // Placeholder: In production, this would link to an actual PDF
    window.open("#", "_blank");
  };

  return (
    <Button onClick={handleDownload} variant="outline" size="lg">
      <Download className="mr-2 h-4 w-4" />
      Lebenslauf herunterladen (PDF)
    </Button>
  );
}

