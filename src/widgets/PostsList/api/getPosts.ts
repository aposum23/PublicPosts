import instance from "@/app/instance.ts";
import type {IPost} from "@/utils/types/postTypes.ts";
import type {AxiosResponse} from "axios";

export const getAllPosts = async (): Promise<AxiosResponse<IPost[]>> => {
    return await instance.get('posts');
}