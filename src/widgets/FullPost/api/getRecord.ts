import type {AxiosResponse} from "axios";
import type {IPost} from "@/utils/types/postTypes.ts";
import instance from "@/app/instance.ts";

export const getRecord = async (recordId: number): Promise<AxiosResponse<IPost>> => {
    return await instance.get(`posts/${recordId}`);
}