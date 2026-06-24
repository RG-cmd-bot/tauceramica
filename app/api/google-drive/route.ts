import { NextResponse } from "next/server"

// This is a mock API route that would normally connect to Google Drive API
// In a real implementation, you would use the Google Drive API to fetch files

export async function GET() {
  // Simulate a delay like a real API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock data that would normally come from Google Drive
  const files = [

    {
      id: "file2",
      name: "Ценовник 2024",
      description: "Детален ценовник на сите производи",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      size: "2.3 MB",
      lastModified: "2024-05-01T14:45:00Z",
      webViewLink: "https://drive.google.com/file/d/1example2/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1example2",
    },
  ]

  return NextResponse.json({ files })
}
