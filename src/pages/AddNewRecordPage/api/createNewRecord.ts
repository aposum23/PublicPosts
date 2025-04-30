import type {IPost} from "@/utils/types/postTypes.ts";
import type {AxiosResponse} from "axios";
import instance from "@/app/instance.ts";

export const createNewRecord = async (data: IPost): Promise<AxiosResponse<void>> => {
    return await instance.post('posts', data);
}