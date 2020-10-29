export const imgUpload = async (file: any) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dq9ut69am/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
};
