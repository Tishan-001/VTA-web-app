import React from "react";

function validateImage(file) {
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  return file && validImageTypes.includes(file.type);
}

function removeElementAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    return arr;
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function PreviewItem({ file, index, onRemove }) {
  const isImage = validateImage(file);
  const url = isImage ? URL.createObjectURL(file) : "";

  const handleRemove = (e) => {
    e.preventDefault();
    onRemove(index);
  };

  

  return (
    <div className="w-full h-full rounded-md flex flex-col min-h-[fit-content]">
      {isImage ? (
        <div className="relative h-3/4 flex-grow w-auto">
          <img src={url} alt="Preview" className="h-full object-cover" />
          <button
            type="button"
            className="absolute top-0 right-0 p-1 bg-white rounded-full hover:bg-gray-200 focus:bg-gray-200"
            onClick={handleRemove}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function FileUpload({
  Placeholder,
  className,
  onUpload,
  name,
  Thumbnail = PreviewItem,
  allowMultiple = true,
  maxFiles = 5,
  preview = false,
  acceptedFileTypes = "image/*",
  maxSize = 10 * 1024 * 1024,
  ...restProps
}) {
  const [files, setFiles] = React.useState([]);
  const drop = React.useRef(null);

  React.useEffect(() => {
    drop.current?.addEventListener("dragover", handleDragOver);
    drop.current?.addEventListener("drop", handleDrop);

    return () => {
      drop.current?.removeEventListener("dragover", handleDragOver);
      drop.current?.removeEventListener("drop", handleDrop);
    };
  }, [drop.current]);

  const validateAndUpload = (files) => {
    const selectedFiles = Array.from(files).filter((file) => file?.size < maxSize && validateImage(file));

    const arrLength = selectedFiles.length;
    if (arrLength > maxFiles) {
      selectedFiles.splice(0, arrLength - maxFiles);
    }

    setFiles(selectedFiles);
    onUpload(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      validateAndUpload(files);
    }
  };

  const handleFileInputChange = (event) => {
    validateAndUpload(Array.from(event.target.files));
  };

  const handleOnRemove = (index) => {
    const updatedFiles = removeElementAtIndex([...files], index);
    setFiles([...updatedFiles]);
  };

  return (
    <label ref={drop} {...restProps} htmlFor={name} className={`cursor-pointer ${className}`}>
      {files?.length === 0 && Placeholder ? <Placeholder multiple={allowMultiple} /> : null}
      <input
        id={name}
        name={name}
        type="file"
        accept={acceptedFileTypes}
        className="sr-only"
        onChange={handleFileInputChange}
        multiple={allowMultiple}
      />

      {preview && Thumbnail ? (
        <div className="w-full h-full">
          {files.length > 0 ? (
            <div className="w-full grid grid-cols-3 gap-x-1 h-full">
              {files.map((file, index) => (
                <Thumbnail file={file} key={index} onRemove={handleOnRemove} index={index} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </label>
  );
}

FileUpload.PreviewItem = PreviewItem;

export { FileUpload };
