import React from "react";
import FileViewer from "react-file-viewer";

export const FileViewerOrganism = ({
  fileType,
  filePath,
}: {
  fileType: string;
  filePath: string;
}) => {
  // console.log("FILEVIEWER", filePath, fileType);
  return (
    <FileViewer
      fileType={fileType}
      filePath={filePath}
      onError={(e: any) => console.warn("THE ERROR", e)}
    />
  );
};
