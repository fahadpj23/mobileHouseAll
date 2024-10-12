import { useState } from "react";

const CustomFileUpload = () => {
  const [selectedFfile, setSelectedFile] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event: any) => {
    const fileDetails = event?.target?.files[0];
    if (fileDetails) {
      setSelectedFile(URL.createObjectURL(fileDetails));
      if (fileDetails.type.startsWith("image/")) setFileType("image");
      else setFileType("pdf");
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*,application/pdf"
      />
      {selectedFfile && fileType && fileType === "image" ? (
        <img src={selectedFfile} alt="preview" width="50" height="50" />
      ) : (
        <embed
          src={selectedFfile}
          type="application/pdf"
          width="50"
          height="50"
        />
      )}
    </div>
  );
};
export default CustomFileUpload;
