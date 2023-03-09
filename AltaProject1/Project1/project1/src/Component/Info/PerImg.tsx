import axios from "axios";
import { IFile } from "./IFile";

const API_URL = "http://localhost:3000/api/files/";

class PerImg {
  upload(file: File, onUploadProgress: any) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(API_URL + "upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles(): Promise<IFile[]> {
    return axios.get(API_URL).then((response) => {
      return response.data as IFile[];
    });
  }
}
export default new PerImg();