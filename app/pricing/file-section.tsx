"use client";

import { FileCard } from "@/components/file-card";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface UploadThingFile {
  id: string;
  name: string;
  key: string;
  url: string;
  size: number;
  uploadedAt: string;
  uploadedBy?: string;
}

export function FileSection() {
  const [latestFile, setLatestFile] = useState<UploadThingFile | null>(null);
  const [fileMetadata, setFileMetadata] = useState<{
    fileName: string;
    description: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestFile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch the latest file from our API
        const response = await fetch("/api/files");

        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }

        const data = await response.json();

        if (data.file) {
          setLatestFile(data.file);

          // Try to get metadata from localStorage (in a real app, this would come from a database)
          try {
            const storedFiles = JSON.parse(
              localStorage.getItem("uploadedFiles") || "[]"
            );
            // Find metadata for this file by matching the URL
            const matchingFile = storedFiles.find(
              (f: any) => f.url === data.file.url
            );

            if (matchingFile) {
              setFileMetadata({
                fileName: matchingFile.fileName,
                description: matchingFile.description || "",
              });
            } else {
              // If no metadata found, use the file name from UploadThing
              setFileMetadata({
                fileName: data.file.name || "Ценовник",
                description: "Најнов ценовник",
              });
            }
          } catch (err) {
            console.error("Error parsing metadata:", err);
            // Fallback to using the file name from UploadThing
            setFileMetadata({
              fileName: data.file.name || "Ценовник",
              description: "Најнов ценовник",
            });
          }
        } else {
          setLatestFile(null);
          setFileMetadata(null);
        }
      } catch (err) {
        console.error("Error fetching latest file:", err);
        setError(
          "Не можевме да го преземеме најновиот ценовник. Обидете се повторно подоцна."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestFile();

    // Refresh the data every 5 minutes
    const interval = setInterval(fetchLatestFile, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("mk-MK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getFileType = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (extension === "pdf") return "PDF";
    if (["xlsx", "xls"].includes(extension || "")) return "Excel";
    return "Документ";
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  if (isLoading) {
    return (
      <div className="h-48 rounded-lg border bg-muted animate-pulse"></div>
    );
  }

  if (error) {
    return (
      <div className="p-6 border rounded-lg bg-destructive/10 text-destructive">
        {error}
      </div>
    );
  }

  if (!latestFile || !fileMetadata) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Нема прикачени датотеки</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>Последно ажурирано: {formatDate(latestFile.uploadedAt)}</span>
      </div>

      <div className="max-w-xl mx-auto">
        <FileCard
          key={latestFile.id}
          id={latestFile.id}
          title={fileMetadata?.fileName || latestFile.name}
          description={fileMetadata?.description || ""}
          fileType={getFileType(latestFile.name)}
          fileSize={formatFileSize(latestFile.size)}
          lastUpdated={formatDate(latestFile.uploadedAt)}
          downloadUrl={latestFile.url}
        />
      </div>
    </div>
  );
}
