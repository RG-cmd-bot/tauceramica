import { NextResponse } from "next/server"
import { UTApi } from "uploadthing/server"

// Initialize the UploadThing API
const utapi = new UTApi()

export async function GET() {
  try {
    // Fetch all files from UploadThing
    const files = await utapi.listFiles({})

    // Sort files by creation date (newest first)
    const sortedFiles = [...files.files].sort((a: { uploadedAt: number }, b: { uploadedAt: number }) => {
      return b.uploadedAt - a.uploadedAt
    })

    // Get the most recent file
    const latestFile = sortedFiles.length > 0 ? sortedFiles[0] : null

    const mappedFile = latestFile
      ? {
          ...latestFile,
          url: `https://${process.env.APP_ID}.ufs.sh/f/${latestFile.key}`,
        }
      : null;

    // Return the latest file
    return NextResponse.json({ file: mappedFile })
  } catch (error) {
    console.error("Error fetching files from UploadThing:", error)
    return NextResponse.json({ error: "Failed to fetch files" }, { status: 500 })
  }
}
